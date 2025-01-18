const mainContainer = document.querySelector('#root');
const reactElement = 
{
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: "Click me to vist google"
}

function customRender(reactElement,container)
{

    const element = document.createElement(reactElement.type);
    element.innerHTML = reactElement.children;

    for(const prop in reactElement.props)
    {
        if(prop === 'children') continue           
        element.setAttribute(prop,reactElement.props[prop])        
    }
        
    element.setAttribute('href',reactElement.props.href);
    element.setAttribute('target',reactElement.props.target);
    container.appendChild(element);
}

customRender(reactElement,mainContainer);
