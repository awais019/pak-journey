// export const useAuth = () => {
//   const signUp = async (first_name, last_name, email, password) => {
//     try {
//       const response = await fetch(
//         `/api/signup?param1=${first_name}&param2=${last_name}&param3=${email}&param4=${password}`,
//         {
//           method: "POST",
//         },
//       );

//       if (response.ok) {
//         const responseData = await response.json();
//         console.log(responseData);
//         return responseData;
//       } else {
//         console.log("Request failed:", response);
//       }
//     } catch (error) {
//       console.error("An error occurred:", error);
//     }
//   };
//   /////////////////////////////////////////////
//   const signIn = async (email, password) => {
//     try {
//       const response = await fetch(
//         `/api/signin?param1=${email}&param2=${password}`,
//         {
//           method: "POST",
//         },
//       );
//       if (response.ok) {
//         const responseData = await response.json();
//         return responseData;
//       } else {
//         console.log("Request failed:", response);
//       }
//     } catch (error) {
//       console.error("An error occurred:", error);
//     }
//   };

//   return { signIn, signUp };
// };
