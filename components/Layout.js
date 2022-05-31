import Head from 'next/head';
import styles from './layout.module.css';
import Link from 'next/link';
import Image from 'next/image'
import logo from '/public/logo.png';
import {FaFacebook, FaInstagram, FaTiktok} from 'react-icons/fa'

export const siteTitle = 'Study project';

export default function Layout({ children, home }) {
    return (
        <div>
            <Head>
                <link rel="icon" href="/vntu.ico" />
                <meta
                    name="description"
                    content="Learn how to build a personal website using Next.js"
                />
                <meta
                    property="og:image"
                    content={`https://og-image.vercel.app/${encodeURI(
                        siteTitle,
                    )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
                />
                <meta name="og:title" content={siteTitle} />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>
            <header className={styles.header}>
                <Link href="/">
                    <Image src={logo} width={100} height={100} quality={100}/>
                </Link>
            </header>
            <main className={styles.container}>{children}</main>
            {!home && (
                <div className={styles.backToHome}>
                    <Link href="/">
                        <a className={styles.btn} >← Back to home</a>
                    </Link>
                </div>
            )}
            <footer className={styles.footer}>
                <div className={styles.author}>
                    <a className={styles.fItem} target="_blank" href='https://initki.vntu.edu.ua/'>Факультет ІТКІ</a>
                </div>
                <div className={styles.social}>
                    <a className={styles.fItem} target="_blank" href='https://vm.tiktok.com/ZMN1CmhSj/'><FaTiktok size={24}/></a>
                    <a className={styles.fItem} target="_blank"  href='https://www.instagram.com/vntu_fitki/'><FaInstagram size={24}/></a>
                    <a className={styles.fItem} target="_blank"href='https://www.facebook.com/groups/fitki.vntu'><FaFacebook size={24}/></a>
                </div>
                <div className={styles.depart}>
                    <a className={styles.fItem} target="_blank" href='http://ot.vntu.edu.ua/'>Кафедра ОТ</a>
                    <a className={styles.fItem} target="_blank" href='https://zi.vntu.edu.ua/'>Кафедра ЗІ</a>
                    <a className={styles.fItem} target="_blank" href='https://pz.vntu.edu.ua/'>Кафедра ПЗ</a>
                </div>
            </footer>
        </div>
    );
}
