export default function MainButton({ label, onClick }) {
  return (
    <button type="button" onClick={onClick} style={{ padding: '10px 20px', fontSize: '16px' }}>
      {label}
    </button>
  )
}
