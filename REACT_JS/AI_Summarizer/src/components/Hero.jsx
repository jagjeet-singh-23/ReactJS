import { logo } from '../assets';

const Hero = () => {
    return (
        <header className='w-full flex justify-center items-center flex-col'>
            <nav className='flex justify-between items-center w-full mt-10 pt-3'>
                <img src={logo} alt="summ_logo" className='w-28 object-contain' />
                <button type='button' onClick={() => window.open('https://github.com/jagjeet-singh-23')} className='black_btn'>Github</button>
            </nav>
            <h1 className='head_text'>
                Summarize your Articles with <br className='max-md:hidden' /> <span className='orange_gradient'>GPT-4 AI</span>
            </h1>
            <h2 className='desc'>
                Effortlessly condense lengthy articles with AI Summarizer - Your shortcut to concise, informative reading, saving you time and improving your productivity.
            </h2>
        </header>
    )
}

export default Hero