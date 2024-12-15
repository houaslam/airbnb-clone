function LoginForm(){
    const handleSubmit = ( e )=>{
        e.preventDefault()
        console.log( e.target )
    }

    return (
        <form  onSubmit={handleSubmit} >
            <input type="text" name="Username"/>
            <input type="password" name="password"/>
            <input type="submit" value="Submit" />
        </form>
    )
}

export default LoginForm