import style from './styles'
import { useSelector } from 'react-redux'

function Home() {
    const num = useSelector((state: { num: number }) => state.num)
    return (<div className={style.div}>123--{num}</div>)
}
export default Home