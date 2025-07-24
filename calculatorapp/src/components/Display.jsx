import { formatDisplay } from '../utils/calculator'

function Display({ value }) {
  return (
    <div className="text-white text-right font-light mb-3 px-4 py-8 min-h-[100px] flex items-end justify-end overflow-hidden">
      <span className="text-6xl break-all max-w-full overflow-hidden text-ellipsis whitespace-nowrap">
        {formatDisplay(value)}
      </span>
    </div>
  )
}

export default Display
