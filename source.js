// export const isim = "Mehmet";
// export const kullanici = { isim, yas: 35};
// export function merhaba(isim) {
//     return `Merhaba ${isim}`;
// }

// export { isim, kullanici, merhaba };

// export default function merhaba(isim) {
//     return `Merhaba ${isim}`;
// }

function merhaba(isim) {
    return `Merhaba ${isim}`;
}

const kullanici = { isim: "Mehmet", yas: 35 };
const isim = "Ahmet";

export { merhaba as default, kullanici, isim };

// export default merhaba;