import {FunctionalComponent, h} from 'preact';
import style from './style.css';

const Footer: FunctionalComponent = () => {
  return (
    <footer class={style.footer}>
      <p>
        <a
          rel="noreferrer noopener"
          target="_blank"
          href="//github.com/nmussy/train-sign/releases"
        >
          v0.3.1
        </a>{' '}
        |{' '}
        <a
          rel="noreferrer noopener"
          target="_blank"
          href="//github.com/nmussy/train-sign"
        >
          GitHub
        </a>{' '}
        |{' '}
        <a
          rel="noreferrer noopener"
          target="_blank"
          href="//discord.gg/qwns6crVHf"
        >
          DdG Discord
        </a>{' '}
        |{' '}
        <a
          rel="noreferrer noopener"
          target="_blank"
          href="//morgansleeper.github.io/Yamanotes/"
        >
          Yamanotes
        </a>{' '}
        | Inspired by{' '}
        <a
          rel="noreferrer noopener"
          target="_blank"
          href="//tr246.github.io/Sigene/index.html"
        >
          tr246's Sigene
        </a>{' '}
        |{' '}
        <a
          rel="noreferrer noopener"
          target="_blank"
          href="//commons.wikimedia.org/wiki/File:Yamanote_Line_(April_2020).svg"
        >
          CC BY-SA map
        </a>
      </p>
    </footer>
  );
};

export default Footer;
