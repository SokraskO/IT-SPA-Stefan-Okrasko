
// FUNCKJA SŁUŻĄCA DO OBSŁUGI DAT

export function today() {
    const date = new Date;
    let year = date.getFullYear().toString();
    let month = (date.getMonth()+1).toString().padStart(2, '0');
    let day = date.getDate().toString().padStart(2, '0');
    const modifiedDate = `${year}-${month}-${day}`;
    return modifiedDate;
}

export function maximumDate() {
    const date = new Date;
    let year = (date.getFullYear()+1).toString();
    let month = (date.getMonth()+1).toString().padStart(2, '0');
    let day = date.getDate().toString().padStart(2, '0');
    const maximumDate = `${year}-${month}-${day}`;
    return maximumDate;
}