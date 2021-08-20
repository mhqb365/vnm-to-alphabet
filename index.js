// tham khao tai: https://int3ractive.com/2019/07/hai-ung-dung-cua-string-normalize-voi-tieng-viet.html?fbclid=IwAR1k3hlVBpRXGyURgJGtaGGBruAunurnAqFZLjYrouqhDbNdmtGtbQFpSFk

function vnmToAlphabet(source, option = 'default') {
    const result = source
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[đĐ]/g, m => m === 'đ' ? 'd' : 'D');

    switch (option) {
        case 'capitalize':
            return result.replace(/\s+\w/g, f => f.toUpperCase());
        case 'uppercase':
            return result.toUpperCase();
        case 'lowercase':
            return result.toLowerCase();
        case 'default':
        default:
            return result;
    }
}

module.exports = vnmToAlphabet;