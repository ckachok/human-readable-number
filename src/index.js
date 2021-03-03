module.exports = function toReadable (number) {
    const units = ['zero','one','two','three','four','five','six','seven','eight','nine',
                   'ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
    const tens = ['','','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];
    
    if (number >= 1000000000) {   // for numbers from 1 000 000 000 
        return 'This program cannot work with numbers equal to or greater than 1.000.000.000'; 
    }

    if (number < 20) {            // for numbers from 0 to 19
        return units[number];
    }
    
    if (number < 100) {           // for numbers from 20 to 99
        return tens[Math.floor(number / 10)] + (number % 10 === 0 ? '' : ' ' + units[number % 10]); 
    }         
    
    if (number < 1000) {          // for numbers from 100 to 999
        return toReadable(Math.floor(number / 100)) + ' hundred' + (number % 100 === 0 ? '' : ' ' + toReadable(number % 100));
    } 

    if (number < 1000000) {       // for numbers from 1.000 to 999.999
        return toReadable(Math.floor(number / 1000)) + ' thousand' + (number % 1000 === 0 ? '' : ' ' + toReadable(number % 1000));
    } else {                      // for numbers from 1.000.000 to 999.999.999
        return toReadable(Math.floor(number / 1000000)) + ' million' + (number % 1000000 === 0 ? '' : ' ' + toReadable(number % 1000000));
    }
};

    
      