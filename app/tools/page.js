"use client"
import { useState, useCallback } from 'react'
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Hash,
  Type,
  ArrowUpDown,
  Scissors,
  Shuffle,
  AlignLeft,
  AlignCenter,
  AlignRight,
  AlignJustify,
  Eraser,
  SortAsc,
  SortDesc,
  Copy,
  Trash2,
  RotateCcw,
  FileText,
  Upload,
  Download,
} from "lucide-react"

export default function Tools() {
  const [text, setText] = useState('')
  const [wordCount, setWordCount] = useState(0)
  const [charCount, setCharCount] = useState(0)
  const [history, setHistory] = useState([])
  const [historyIndex, setHistoryIndex] = useState(-1)

  const updateCounts = useCallback((newText) => {
    setWordCount(newText.trim().split(/\s+/).filter(Boolean).length)
    setCharCount(newText.length)
  }, [])

  const handleTextChange = (e) => {
    const newText = e.target.value
    setText(newText)
    updateCounts(newText)
    addToHistory(newText)
  }

  const addToHistory = (newText) => {
    setHistory(prev => [...prev.slice(0, historyIndex + 1), newText])
    setHistoryIndex(prev => prev + 1)
  }

  const handleFileUpload = (e) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        const newText = e.target.result
        setText(newText)
        updateCounts(newText)
        addToHistory(newText)
      }
      reader.readAsText(file)
    }
  }

  const downloadTextFile = () => {
    const filename= prompt("Enter The File Name","WellText")
    const blob = new Blob([text], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = file+".txt"
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  const transformText = (transformation) => {
    let newText = text
    switch (transformation) {
      case 'uppercase':
        newText = text.toUpperCase()
        break
      case 'lowercase':
        newText = text.toLowerCase()
        break
      case 'capitalize':
        newText = text.replace(/\b\w/g, c => c.toUpperCase())
        break
      case 'reverse':
        newText = text.split('').reverse().join('')
        break
      case 'trim':
        newText = text.trim()
        break
      case 'shuffle':
        newText = text.split(' ').sort(() => Math.random() - 0.5).join(' ')
        break
      case 'sortAsc':
        newText = text.split('\n').sort().join('\n')
        break
      case 'sortDesc':
        newText = text.split('\n').sort().reverse().join('\n')
        break
      case 'camelCase':
        newText = text.replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) =>
          index === 0 ? word.toLowerCase() : word.toUpperCase()
        ).replace(/\s+/g, '')
        break
      case 'snakeCase':
        newText = text.replace(/\s+/g, '_').toLowerCase()
        break
      case 'kebabCase':
        newText = text.replace(/\s+/g, '-').toLowerCase()
        break
      case 'titleCase':
        newText = text.toLowerCase().split(' ').map(word => 
          word.charAt(0).toUpperCase() + word.slice(1)
        ).join(' ')
        break
      case 'alternatingCase':
        newText = text.split('').map((char, i) => 
          i % 2 === 0 ? char.toLowerCase() : char.toUpperCase()
        ).join('')
        break
      case 'reverseWords':
        newText = text.split(' ').map(word => 
          word.split('').reverse().join('')
        ).join(' ')
        break
      case 'removePunctuation':
        newText = text.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '')
        break
      case 'removeNumbers':
        newText = text.replace(/[0-9]/g, '')
        break
      case 'countWords':
        newText = text.trim().split(/\s+/).filter(Boolean).length.toString()
        break
      default:
        break
    }
    setText(newText)
    updateCounts(newText)
    addToHistory(newText)
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(text)
  }

  const clearText = () => {
    setText('')
    updateCounts('')
    addToHistory('')
  }

  const undo = () => {
    if (historyIndex > 0) {
      setHistoryIndex(prev => prev - 1)
      setText(history[historyIndex - 1])
      updateCounts(history[historyIndex - 1])
    }
  }

  const redo = () => {
    if (historyIndex < history.length - 1) {
      setHistoryIndex(prev => prev + 1)
      setText(history[historyIndex + 1])
      updateCounts(history[historyIndex + 1])
    }
  }
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Text Analysis Tools</h1>
        <p className="text-xl text-center text-muted-foreground mb-8">
          Enter your text below and use the tools to analyze and transform it.
        </p>

        <Textarea
          placeholder="Enter your text here..."
          value={text}
          onChange={handleTextChange}
          className="min-h-[200px] mb-4"
        />

        <div className="flex flex-wrap gap-4 mb-8">
          <Card>
            <CardContent className="p-4 flex items-center">
              <Hash className="mr-2 h-4 w-4" />
              <span>Word Count: {wordCount}</span>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 flex items-center">
              <Type className="mr-2 h-4 w-4" />
              <span>Character Count: {charCount}</span>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <div className="relative">
            <input
              type="file"
              id="file-upload"
              className="hidden"
              accept=".txt"
              onChange={handleFileUpload}
            />
            <Button
              onClick={() => document.getElementById('file-upload').click()}
              className="flex items-center justify-center w-full"
            >
              <Upload className="mr-2 h-4 w-4" /> Upload File
            </Button>
          </div>
          <Button onClick={() => transformText('uppercase')} className="flex items-center justify-center">
            <ArrowUpDown className="mr-2 h-4 w-4" /> UPPERCASE
          </Button>
          <Button onClick={() => transformText('lowercase')} className="flex items-center justify-center">
            <ArrowUpDown className="mr-2 h-4 w-4" /> lowercase
          </Button>
          <Button onClick={() => transformText('capitalize')} className="flex items-center justify-center">
            <ArrowUpDown className="mr-2 h-4 w-4" /> Capitalize
          </Button>
          <Button onClick={() => transformText('titleCase')} className="flex items-center justify-center">
            <Type className="mr-2 h-4 w-4" /> Title Case
          </Button>
          <Button onClick={() => transformText('alternatingCase')} className="flex items-center justify-center">
            <Type className="mr-2 h-4 w-4" /> aLtErNaTiNg
          </Button>
          <Button onClick={() => transformText('reverse')} className="flex items-center justify-center">
            <ArrowUpDown className="mr-2 h-4 w-4" /> Reverse
          </Button>
          <Button onClick={() => transformText('reverseWords')} className="flex items-center justify-center">
            <ArrowUpDown className="mr-2 h-4 w-4" /> Reverse Words
          </Button>
          <Button onClick={() => transformText('trim')} className="flex items-center justify-center">
            <Scissors className="mr-2 h-4 w-4" /> Trim
          </Button>
          <Button onClick={() => transformText('shuffle')} className="flex items-center justify-center">
            <Shuffle className="mr-2 h-4 w-4" /> Shuffle Words
          </Button>
          <Button onClick={() => setText(text.split('\n').filter(Boolean).join('\n'))} className="flex items-center justify-center">
            <Eraser className="mr-2 h-4 w-4" /> Remove Empty Lines
          </Button>
          <Button onClick={() => transformText('sortAsc')} className="flex items-center justify-center">
            <SortAsc className="mr-2 h-4 w-4" /> Sort Lines A-Z
          </Button>
          <Button onClick={() => transformText('sortDesc')} className="flex items-center justify-center">
            <SortDesc className="mr-2 h-4 w-4" /> Sort Lines Z-A
          </Button>
          <Button onClick={() => setText(text.split('\n').map(line => line.trim()).join('\n'))} className="flex items-center justify-center">
            <AlignLeft className="mr-2 h-4 w-4" /> Trim Lines
          </Button>
          <Button onClick={() => setText(text.replace(/\s+/g, ' '))} className="flex items-center justify-center">
            <AlignJustify className="mr-2 h-4 w-4" /> Remove Extra Spaces
          </Button>
          <Button onClick={() => transformText('removePunctuation')} className="flex items-center justify-center">
            <Type className="mr-2 h-4 w-4" /> Remove Punctuation
          </Button>
          <Button onClick={() => transformText('removeNumbers')} className="flex items-center justify-center">
            <Type className="mr-2 h-4 w-4" /> Remove Numbers
          </Button>
          <Button onClick={() => transformText('camelCase')} className="flex items-center justify-center">
            <Type className="mr-2 h-4 w-4" /> camelCase
          </Button>
          <Button onClick={() => transformText('snakeCase')} className="flex items-center justify-center">
            <Type className="mr-2 h-4 w-4" /> snake_case
          </Button>
          <Button onClick={() => transformText('kebabCase')} className="flex items-center justify-center">
            <Type className="mr-2 h-4 w-4" /> kebab-case
          </Button>
          <Button onClick={copyToClipboard} className="flex items-center justify-center">
            <Copy className="mr-2 h-4 w-4" /> Copy to Clipboard
          </Button>
          <Button onClick={clearText} className="flex items-center justify-center">
            <Trash2 className="mr-2 h-4 w-4" /> Clear Text
          </Button>
          <Button onClick={undo} className="flex items-center justify-center">
            <RotateCcw className="mr-2 h-4 w-4" /> Undo
          </Button>
          <Button onClick={redo} className="flex items-center justify-center">
            <RotateCcw className="mr-2 h-4 w-4 transform rotate-180" /> Redo
          </Button>
          <Button onClick={downloadTextFile} className="flex items-center justify-center">
            <Download className="mr-2 h-4 w-4" /> Download Text
          </Button>
        </div>
      </div>
    </div>
  )
}