import { Section } from 'lucide-react'
import React from 'react'
import BookCard from '../components/BookCard'

const BookSection = () => {
  return (
    <section>
      <BookCard bookTitle={"Me, My Phsyche and I"} bookImg={"https://i.ibb.co/5Mjy2LK/Mini-Sample-Book-Book-2-Me-My-Psyche-and-I-page-001.jpg"} bookDescription={"Dive deep into the uncharted territories of the human mind with Me, My Psyche, and I, a thought-provoking and introspective exploration of self-discovery, mental health, and personal growth. This compelling book takes readers on a journey through the intricate labyrinth of emotions, memories, and the psyche, offering profound insights into understanding oneself and navigating the complexities of life."}/>
    </section>
  )
}

export default BookSection
