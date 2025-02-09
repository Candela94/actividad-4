



export const Button = ({variant='primary', children}) => {

    const btnClass = `BtnClass ${ variant === 'primary' ? 'primary-btn' : 'secondary-btn'}`



    return(


        <>
        
        <button className= {btnClass}>{children}</button>
        
        </>

    )



}



