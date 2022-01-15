import Loader from '../components/Loader';
import toast from 'react-hot-toast';
export default function Home() {
  return (
    <div>
      <Loader show />
      <button className="btn-blue" onClick={() => toast.success('toasty toast. Mayo on both sides')}>
        What kind of toast?
      </button>
    </div>
  )
}
