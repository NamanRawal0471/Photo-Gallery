document.querySelector('#album1').addEventListener('click', () => {
    const xhr = new XMLHttpRequest()
    let url=`https://jsonplaceholder.typicode.com/photos?utm_source=Mailerlite&utm_medium=E-mail&utm_campaign=Test%20Series&utm_term=2022-08-09`
    xhr.open('GET', url)
    xhr.onreadystatechange = () => {
        if(xhr.status === 200 && xhr.readyState === 4) {
            const response = JSON.parse(xhr.responseText)

            let output = ''
            for(let i=0; i < 8; i++) {
                output += `
                <div style="margin:auto; padding:auto">
                <img style="width:300px;height:200px;" src=${response[i].url}/>                
                </div>
                `
            }
            console.log(output);
document.querySelector('#images').innerHTML=output
            }
        }
    xhr.send()
    })

    document.querySelector('#album2').addEventListener('click', () => {
        const xhr = new XMLHttpRequest()
        let url=`https://jsonplaceholder.typicode.com/photos?utm_source=Mailerlite&utm_medium=E-mail&utm_campaign=Test%20Series&utm_term=2022-08-09`
        xhr.open('GET', url)
        xhr.onreadystatechange = () => {
            if(xhr.status === 200 && xhr.readyState === 4) {
                const response = JSON.parse(xhr.responseText)
    
                let output = ''
                for(let i=8; i < 16; i++) {
                    output += `
                    <div style="margin:auto; padding:auto">
                    <img style="width:300px;height:200px;" src=${response[i].url}/>                
                    </div>
                    `
                }
                console.log(output);
    document.querySelector('#images').innerHTML=output
                }
            }
        xhr.send()
        })
        document.querySelector('#album3').addEventListener('click', () => {
            const xhr = new XMLHttpRequest()
            let url=`https://jsonplaceholder.typicode.com/photos?utm_source=Mailerlite&utm_medium=E-mail&utm_campaign=Test%20Series&utm_term=2022-08-09`
            xhr.open('GET', url)
            xhr.onreadystatechange = () => {
                if(xhr.status === 200 && xhr.readyState === 4) {
                    const response = JSON.parse(xhr.responseText)
        
                    let output = ''
                    for(let i=16; i < 24; i++) {
                        output += `
                        <div style="margin:auto; padding:auto">
                        <img style="width:300px;height:200px;" src=${response[i].url}/>                
                        </div>
                        `
                    }
                    console.log(output);
        document.querySelector('#images').innerHTML=output
                    }
                }
            xhr.send()
            })
            document.querySelector('#album4').addEventListener('click', () => {
                const xhr = new XMLHttpRequest()
                let url=`https://jsonplaceholder.typicode.com/photos?utm_source=Mailerlite&utm_medium=E-mail&utm_campaign=Test%20Series&utm_term=2022-08-09`
                xhr.open('GET', url)
                xhr.onreadystatechange = () => {
                    if(xhr.status === 200 && xhr.readyState === 4) {
                        const response = JSON.parse(xhr.responseText)
            
                        let output = ''
                        for(let i=24; i < 32; i++) {
                            output += `
                            <div style="margin:auto; padding:auto">
                            <img style="width:300px;height:200px;" src=${response[i].url}/>                
                            </div>
                            `
                        }
                        console.log(output);
            document.querySelector('#images').innerHTML=output
                        }
                    }
                xhr.send()
                })
                document.querySelector('#album5').addEventListener('click', () => {
                    const xhr = new XMLHttpRequest()
                    let url=`https://jsonplaceholder.typicode.com/photos?utm_source=Mailerlite&utm_medium=E-mail&utm_campaign=Test%20Series&utm_term=2022-08-09`
                    xhr.open('GET', url)
                    xhr.onreadystatechange = () => {
                        if(xhr.status === 200 && xhr.readyState === 4) {
                            const response = JSON.parse(xhr.responseText)
                
                            let output = ''
                            for(let i=32; i < 40; i++) {
                                output += `
                                <div style="margin:auto; padding:auto">
                                <img style="width:300px;height:200px;" src=${response[i].url}/>                
                                </div>
                                `
                            }
                            console.log(output);
                document.querySelector('#images').innerHTML=output
                            }
                        }
                    xhr.send()
                    })
                    document.querySelector('#album6').addEventListener('click', () => {
                        const xhr = new XMLHttpRequest()
                        let url=`https://jsonplaceholder.typicode.com/photos?utm_source=Mailerlite&utm_medium=E-mail&utm_campaign=Test%20Series&utm_term=2022-08-09`
                        xhr.open('GET', url)
                        xhr.onreadystatechange = () => {
                            if(xhr.status === 200 && xhr.readyState === 4) {
                                const response = JSON.parse(xhr.responseText)
                    
                                let output = ''
                                for(let i=40; i < 48; i++) {
                                    output += `
                                    <div style="margin:auto; padding:auto">
                                    <img style="width:300px;height:200px;" src=${response[i].url}/>                
                                    </div>
                                    `
                                }
                                console.log(output);
                    document.querySelector('#images').innerHTML=output
                                }
                            }
                        xhr.send()
                        })