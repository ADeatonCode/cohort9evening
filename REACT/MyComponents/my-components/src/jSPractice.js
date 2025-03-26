const getUserInfo - (firstName, lastName, country, title, skills) => {
    return `${firstName} ${lastName}, a ${title} developer based in ${country}.  He knows ${skills.join( ' ' )}`
funciton getUserInfo(firstName, lastName, country, title, skills) {
    return `${firstName} ${lastName}, a ${title} developer based in ${country}. He knows ${skills.join( ' ' )}`

}    
    const skills = ['HTML', 'CSS', 'JS','REACT']
    console.log(
        getUserInfo('Asabeneh', 'Yetaye', 'Finland', 'FullsStack Developer', skills)
    )
}


