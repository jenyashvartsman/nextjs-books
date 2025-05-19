import Link from "next/link";
import styles from "./page.module.css";
import Image from "next/image";
import { getRandomBooks } from "@/lib/data/books.data";

export default async function Home() {
  const books = await getRandomBooks(4);

  return (
    <div className={styles.home}>
      <div className={styles.home__container}>
        <div className={styles.home__left}>
          <h2 className={styles.home__title}>Discover. Track. Enjoy Books.</h2>
          <p className={styles.home__subtitle}>
            A modern platform to explore your favorite authors, genres, and
            build your personal library.
          </p>
          <Link className={styles.home__link} href="/dashboard">
            Go to Dashboard
            <Image src="arrow-right.svg" alt="arrow" width={24} height={24} />
          </Link>
        </div>

        <div className={styles.home__right}>
          {books.map((book) => (
            <Link key={book.id} href={`/books/${book.id}`}>
              <div className={styles.home__book}>
                <Image
                  className={styles.home__bookImage}
                  src={book.coverUrl}
                  alt={book.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64, /9j/2wCEAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDEBCwsLDw4PHRERHTApIik3MjQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIAP8AxwMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAADAAIEBQYBB//EADgQAAEDAwIEAwcCBQQDAAAAAAECAxEABAUSITEGEyJBUXGBBxRCgaGxQlKxwfAjYnIzQ1OC8RU0YoL/xAAZAQADAQEBAAAAAAAAAAAAAAABAgMABAX/xAAjEQACAgICAgICAwAAAAAAAAAAAQIRAwQSITFBEzJRIlJh/9oADAMBAAIRAxEAPwD3xREQEREBERAREQEREBERAREQEREBERAREQHjZLVp0SaYY2JmZz6JMSsp1oU7QepKr57U5lUjAHTGTWc+yL3QINbkhRULkk1pA+XXV9D1sRsmZqQs7ZY5y6T3ntTUGeXZ5htxbt9RI0uzNDKf0GGLIMnNISBoPRtbGyZzZkaTyMKk+0MCwPev0rUybDLpM8qI+zBSycpBl5fB+9YeytPPTyDNT6a7kSR1kjKlo4ZmXVTgfIr0ds9UNPmdTRxE9tbmu0ToL6ibCwR2EbcNnH3fqaWwfp1Teedq6YtUEkqCGgkjHbb4Vpj8u1PESn0Gv5VeLy3K6cRbmqEytZGdORClo9zy/Gq0U5jKTQVmAyvldEd9QKRr3hU5NYUwKmYmTw9+VTlUSVJByWIkcsiECSvHOSPWusVeNj3M/oaLg+QqM0joERAREQEREBERAREQEREBERAREQEREBERAREQEREH//Z"
                />
                <div className={styles.home__bookInfo}>
                  <h3 className={styles.home__bookTitle}>{book.title}</h3>
                  <p className={styles.home__bookAuthor}>{book.author.name}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
