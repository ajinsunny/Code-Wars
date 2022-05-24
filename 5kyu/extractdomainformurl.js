/* Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

* url = "http://github.com/carbonfive/raygun" -> domain name = "github"
* url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
* url = "https://www.cnet.com"                -> domain name = cnet" */

function domainName(url){
    if (url.startsWith('h') && !url.includes('www') ) {
      let arr = url.split('//')
      let arr2 = arr.map(el => el.split('.'))
      return arr2[1][0]
    }
    let arr = url.split('.')
    if (arr.length <= 2) {
      return arr[0]
    }
    return arr[1]
  }