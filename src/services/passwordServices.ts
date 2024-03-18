export default function generatePass(){
    let password: string = ''
    let characters: string = 'A@#$*!123456789dghbgdiuVRIGHRIGV'
    let passWordLenght = 8
    for(let index = 0;index < passWordLenght;index++){
        password += characters.charAt(
            Math.floor(Math.random() * characters.length)
        )
    }
    return password
}