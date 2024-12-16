export const hetProductsData = async() => {
    try{
        const data = await fetch("data.js");
        console.log(data);
        console.log(data.json());
    return data.json();
    } catch (error) {
        console.error(error);
    }
};
fetch("data.json")
.then(response => response.json())
.then(values => values.forEach(value => console.log(value.isEmployed)));