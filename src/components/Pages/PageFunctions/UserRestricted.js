import {url} from "./../../../index"

export const update_location = async (user_id,zipcode,country) => {
    var updateFormData = new FormData();
    updateFormData.append('user_id',user_id);
    updateFormData.append('zipcode',zipcode);
    updateFormData.append('country',country);
    let updateResp =  await fetch(url + 'update_location', {
        method: 'POST',
        body: updateFormData
    });
    let updateData = await updateResp.json();
    console.log(updateData);
}
