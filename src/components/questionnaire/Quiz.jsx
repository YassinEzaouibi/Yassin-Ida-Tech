import {useRef, useState} from 'react'
import {idaData as data} from '../../assets/data/ida-data.js'

const Quiz = () => {

    let [index, setIndex] = useState(0);
    let [question, setQuestion] = useState(data[index]);
    let [lock, setLock] = useState(false);
    let [score, setScore] = useState({ Prudent: 0, modere: 0, Agressif: 0 });    let [result, setResult] = useState(false)
    let [selectedChoice, setSelectedChoice] = useState(null);
    // let [userChoices, setUserChoices] = useState({});

    let options = useRef([]);

    // const checkAns = (e, ans) => {
    //         const chosenPoints = question.points[ans];
    //         const maxPointsCategory = Object.keys(chosenPoints).reduce((a, b) => chosenPoints[a] > chosenPoints[b] ? a : b);
    //         setScore(prev => prev + chosenPoints[maxPointsCategory]);
    //         setSelectedChoice(ans);
    //         setLock(true);
    // }

    const checkAns = (e, ans) => {
        const chosenPoints = question.points[ans];
        setScore(prev => ({
            Prudent: prev.Prudent + chosenPoints.Prudent,
            modere: prev.modere + chosenPoints.modere,
            Agressif: prev.Agressif + chosenPoints.Agressif
        }));
        setSelectedChoice(ans);
        setLock(true);
    }

    const next = () => {
        if (lock === true) {
            if (index === data.length - 1) {
                setResult(true);
                return 0;
            }
            setIndex(++index);
            setQuestion(data[index]);
            setSelectedChoice(null);
            setLock(false);
        }
    }

    const reset = () => {
        setIndex(0);
        setQuestion(data[0]);
        setScore(0);
        setLock(false);
        setResult(false);
    }

    return (
        <div className='container mx-auto text-black flex flex-col space-y-8 p-4 mt-6'>
            <h1 className='text-3xl font-bold'> { question.group } </h1>
            <hr className='h-0.5 bg-yellow-300 border-none'/>
            {
                result ? <></> : <>
                    <h2 className='text-2xl font-semibold mb-4'>{index + 1}. {question.question}</h2>
                    <ul className='space-y-4'>
                        {Object.keys(question.choices).map((key) => (
                            <li key={key} ref={ref => options.current[key - 1] = ref} onClick={(e) => {
                                checkAns(e, key)
                            }} className={`flex items-center h-16 pl-6 border border-gray-600 rounded-lg text-lg cursor-pointer hover:bg-gray-200 ${selectedChoice === key ? 'bg-gray-300' : ''}`}>{question.choices[key]}</li>
                        ))}
                    </ul>
                    <button onClick={next} className='mx-auto w-64 h-16 bg-blue-600 text-white text-2xl font-bold rounded-lg cursor-pointer hover:bg-blue-800'>Next</button>
                    <div className='mx-auto text-lg font-medium'>{index + 1} of {data.length} questions</div>
                </>
            }
            {
                result ?
                    <div className='flex flex-col items-center justify-center space-y-4 bg-blue-100 p-8 rounded-lg shadow-lg'>
                        <h2 className='text-3xl font-bold text-blue-700'>Your Score</h2>
                        <p className='text-xl text-blue-600'><span className="text-2xl font-semibold">Prudent:</span> {score.Prudent}</p>
                        <p className='text-xl text-blue-600'><span className="text-2xl font-semibold">modere:</span> {score.modere}</p>
                        <p className='text-xl text-blue-600'><span className="text-2xl font-semibold">Agressif: </span>{score.Agressif}</p>
                        <button onClick={reset} className='w-64 h-12 bg-blue-600 text-white text-xl font-bold rounded-lg cursor-pointer hover:bg-blue-800'>Reset</button>
                    </div>
                    : <></>
            }
        </div>
    )
}

export default Quiz