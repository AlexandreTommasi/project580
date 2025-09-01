'use client'

import { useEffect, useState } from 'react'
import axios from 'axios'

export default function Home() {
  const [apiInfo, setApiInfo] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/info')
        setApiInfo(response.data)
      } catch (error) {
        console.error('Error fetching API:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-8">Project 580</h1>
        <p className="text-xl mb-4">Simple Full-Stack Application</p>
        
        <div className="mt-8 p-6 bg-gray-100 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Backend Status</h2>
          {loading ? (
            <p>Loading...</p>
          ) : apiInfo ? (
            <div>
              <p>Project: {apiInfo.project}</p>
              <p>Version: {apiInfo.version}</p>
              <p>Environment: {apiInfo.environment}</p>
            </div>
          ) : (
            <p>Unable to connect to backend</p>
          )}
        </div>
      </div>
    </main>
  )
}