const variants = {
  primari: 'bg-fuchsia-200 border-b-fuchsia-900 hover:bg-fuchsia-300 dark:bg-white',
  perill: 'bg-red-200 border-b-red-900 hover:bg-red-300 dark:bg-white',
  secundari: 'bg-slate-200 border-b-slate-900 hover:bg-slate-300 dark:bg-white',


}

function Boto({children, onClick, className='', disabled, variant='primari', ...props}){
    return (
        <button type="button" {...props} disabled={disabled} onClick={onClick} className={`${className} ${variants[variant]}  border rounded py-1 px-2   focus-visible:ring-2 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed`}>
            {children}
        </button>
    )
}

export default Boto