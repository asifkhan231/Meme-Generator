import React from 'react'
// import MemesData from '../Data'


//till now we are importing data from a data file which is available in project it self but now we will import data through API by fetching it with the help of UseEffect  hook

function Meme() {

    let url;
    const [memeImage, setMemeImage] = React.useState([]);
    // const [memeImage,setMemeImage] = React.useState(MemesData);
    const [memeData, setMemeData] = React.useState({
        topText: '',
        bottomText: '',
        randomImage: "https://i.imgflip.com/30b1gx.jpg"
    })

    React.useEffect(() => {
        //Async inside the useEffect hook
        /**
   useEffect takes a function as its parameter. If that function
   returns something, it needs to be a cleanup function. Otherwise,
   it should return nothing. If we make it an async function, it
   automatically retuns a promise instead of a function or nothing.
   Therefore, if you want to use async operations inside of useEffect,
   you need to define the function separately inside of the callback
   function, as seen below:
   */
        async function getMemes() {
            let res = await fetch("https://api.imgflip.com/get_memes")// A meme generating API
            let data = await res.json();
            setMemeImage(data.data.memes)
        }
        // fetch("https://api.imgflip.com/get_memes")// A meme generating API
        // .then(res => res.json())
        // .then(data => setMemeImage(data.data.memes))
        getMemes();

    }, [])



    function HandleEvent() {
        const memeArray = memeImage;
        // const memeArray = memeImage.data.memes;
        const randomNum = Math.floor(Math.random() * memeArray.length);
        url = memeArray[randomNum].url;
        //  console.log(url);
        setMemeData(preMemeData => ({
            ...preMemeData,
            randomImage: url,
            topText: '',
            bottomText: ''
        }));
    }



    function handleChange(event) {
        let { value, name } = event.target
        setMemeData(preMemeData => (
            {
                ...preMemeData,
                [name]: value
            }
        ))
    }

    // console.log(textData)
    return (
        <main >
            <form className='meme-form'>
                <input type='text' placeholder='text here' className='inp' name='topText' value={memeData.topText} onChange={handleChange}></input>
                <input type='text' placeholder='text here' className='inp' name='bottomText' value={memeData.bottomText} onChange={handleChange}></input>
                <button type='button' className='btn' onClick={HandleEvent} >Get a new meme image</button>
            </form>
            <div className='imageDiv'>
                <img src={memeData.randomImage} alt='' className='memeImage' ></img>
                <h2 className='topText memeText'>{memeData.topText}</h2>
                <h2 className='bottomText memeText'>{memeData.bottomText}</h2>
            </div>
        </main>
    )
}

export default Meme