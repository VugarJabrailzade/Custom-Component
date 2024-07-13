import className from "classnames"

function Button({
    children,
    primary,
    secondary,
    success,
    warning,
    danger,
    outline,
    rounded,
    ...rest
}){
    const classes = className(rest.className,'flex items-center   px-3 py-1.5 border',{
        'border-blue-500 text-white bg-blue-500': primary,
        'border-gray-900 text-white bg-gray-500': secondary,
        'border-green-500 text-white bg-green-500': success,
        'border-yellow-500 text-white bg-yellow-500': warning,
        'border-red -500 text-white bg-red-500': danger,
        'rounded-full': rounded,
        'bg-white': outline,
        'text-blue-500': outline && primary,
        'text-gray-900': outline && secondary,
        'text-green-500': outline && success,
        'text-yellow-500': outline && warning,
        'text-red-500': outline && danger
    })

    
    return <button {...rest} className={classes}>{children}</button>
}

Button.propTypes = {
    checkVariationValue:({primary, secondary, success, warning, danger}) =>{

        const count = Number(!!primary) +
        Number(!!secondary) +
        Number(!!success) +
        Number(!!warning) +
        Number(!!danger) 
        

        if(count>1){
            return new Error('Only one of the primary, secondary, success can  be true')
        }
    
    }
}




export default Button;