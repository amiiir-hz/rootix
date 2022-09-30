// const fetchData = (url, options) => {
//     const data = fetch(`https://api.rootix.ae/api/v1/${url}`, options)
//         // .then((response) => response.json())
//         // .then((data) => data)
//         // .catch((err) => err);
//         .then(response => response.text())
//         .then(result => console.log(result))
//         .catch(error => console.log('error', error));
//       return data;
//       // .then((response) => {
//       //   if (response.status === 200) {
//       //     return response.json();
//       //   } else {
//       //     return response.json().then((data) => {
//       //       alert(data.message);
//       //     });
//       //   }
//       // })
//       // .catch((err) => err);

//       //section7 minute 3
//   };
//   export default fetchData;

const tokenn =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiN2JmZDM2NDNkZTM0NTQzY2MzMmZlMDQ1N2M2NTU2MWU3MzQ4NTUwNzRmYzEwMTg1OWE2MTZiNmUxMzNmNDBiNTUxNjhkZmVkNjgzZmI0N2EiLCJpYXQiOjE2NjE2Nzc1NjYuMDAzMjc1LCJuYmYiOjE2NjE2Nzc1NjYuMDAzMjc2LCJleHAiOjE2OTMyMTM1NjYuMDAxNzQxLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.AbKoJHxYWcj6hjBXLEixxiQ60nSyD3Bsff8-BshUnMmRAdOYT_s3VOOQrlP_o6Juh1LQgN3kuaZEbXKO6Mc8DYv4PbrgHIi_N5a_w4Z_jxMqcGJbmV4JwYjHnQ5T8HCziQgwIQ4TxfZyHbg0SxwTv1UVp7KqybH17MZdHCFIWAIiI6AkHj53WLOjtVzVOPlNbmNaixoErksYtoPnSk0GwRU8h_lFa8JoGkwHrqyqMwaCZ1xSlunICgIn4MC1tAXHWxKJekcnUB2YcSSm1LLT5a2vhrctkavyd-lig0uN5Vp0Y5VK7kI4ujmEIRve8k1XrjyHs-ZLwdopqnonFp4CQq3x73lgG4wcLk18Yq1lyQZMtx-uP-lzQLXlKyI633qmhVUJIkkhxNrERDk3DAVU8y1Bzk2eOCkmt-CCIU8DFMGELxZDt9LUiOtEaRmG5YGcfEjBvYtnP3J2plPryPGDKk5KnbJIU_lXQwjhiETs6PUn8yEtaXPCEni2gwGqTZPJogEgMMu1Zag3GDlMstyjeSgRRSYZLXi4QiCqA3J9HcaalGxe914nwRN52A8Hik3oPzGF7nEHFQx_a8uCZ11OCOrFfKpuSjednL_lF1mbIntvcF21CFFEvo2OWQBA26437liK3iZFKIdilWoh8BnFw88vDfdEs6RZwRlNhjwtBDM";
import Swal from "sweetalert2";

export const fetchData = async (url, data, method = "GET", token) => {
  try {
    let result = await sendRequest(url, token, data, method);
    // if (result.status !== 200) {
    //   Swal.fire({
    //     title: "Error!",
    //     text: result.status,
    //     icon: "error",
    //     confirmButtonText: "ok",
    //   });
    // }

    const response = await result.json();
    return response;
  } catch (error) {
    console.error(error);
  }
};

const sendRequest = (url, token, data, method) =>
  fetch(`https://api.rootix.ae/api/v1/${url}`, {
    headers: {
      Authorization: token ? `Bearer ${token}` : null,
      credentials: "include",
      Accept: "application/json",
      "Content-Type": "aapplication/json",
    },
    method,
    body: JSON.stringify(data),
  }).then(
    (data) => {
      if (data.status !== 400) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
          footer: data.status,
        });
      }
    },
    (error) => {
      if (error) {
        console.log("error :>> ", error);
      }
    }
  );
