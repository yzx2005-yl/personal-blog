import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const postsDirectory = path.join(process.cwd(), 'posts')

export function getSortedPostsData() {
  const fileNames = fs.readdirSync(postsDirectory)
    .filter(fileName => fileName.endsWith('.md'))
  
  const allPostsData = fileNames.map(fileName => {
    const slug = fileName.replace(/\.md$/, '')
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const matterResult = matter(fileContents)

    return {
      id: slug,
      title: matterResult.data.title,
      date: matterResult.data.date || new Date().toISOString().split('T')[0],
      description: matterResult.data.description || '',
    }
  })

  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1))
}

export function getAllPostIds(): { params: { id: string } }[] {
  try {
    // 确保postsDirectory是绝对路径
    const postsPath = path.resolve(process.cwd(), 'posts')
    console.log('Posts directory path:', postsPath)
    
    const fileNames = fs.readdirSync(postsPath)
      .filter(fileName => fileName.endsWith('.md'))
    
    console.log('Found files:', fileNames)

    const paths = fileNames.map(fileName => ({
      params: {
        id: fileName.replace(/\.md$/, '')
      }
    }))

    console.log('Generated static paths:', JSON.stringify(paths, null, 2))
    return paths
  } catch (error) {
    console.error('Error in getAllPostIds:', error)
    return []
  }
}

export async function getPostData(id: string) {
  const fullPath = path.join(postsDirectory, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  
  const matterResult = matter(fileContents)
  
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content)

  const contentHtml = processedContent.toString()

  return {
    id,
    contentHtml,
    title: matterResult.data.title,
    date: matterResult.data.date || new Date().toISOString().split('T')[0],
    description: matterResult.data.description || '',
  }
}