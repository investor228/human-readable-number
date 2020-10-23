module.exports = function toReadable (number) {
    let firstTents = (number) => {
        switch (number) {    
            case 1:
            return 'one';
            case 2:
            return 'two';
            case 3:
            return 'three';
            case 4:
            return 'four';
            case 5:
            return 'five';
            case 6:
            return 'six';
            case 7:
            return 'seven';
            case 8:
            return 'eight';
            case 9:
            return 'nine';
          }
        }
    
    
        let secondTents = (number) =>{
            switch (number) {
    
                case 11:
                return 'eleven';
                case 12:
                return 'twelve';
                case 13:
                return 'thirteen';
                case 14:
                return 'fourteen';
                case 15:
                return 'fifteen';
                case 16:
                return 'sixteen';
                case 17:
                return 'seventeen';
                case 18:
                return 'eighteen';
                case 19:
                return 'nineteen';
            }
            }
    
            let ThirdTents = (number) => {
             switch (Math.floor(number/10)) {
                case 1:
                return 'ten';
                case 2:
                return 'twenty';    
                case 3:
                return 'thirty';
                case 4:
                return 'forty';
                case 5:
                return 'fifty';
                case 6:
                return 'sixty';
                case 7:
                return 'seventy';
                case 8:
                return 'eighty';
                case 9:
                return 'ninety';
             }
            }
    
        let fourTents = (number) => {
        switch (Math.floor(number/100)) {
           case 1:
           return 'one hundred';
           case 2:
           return 'two hundred';
           case 3:
           return 'three hundred';
           case 4:
           return 'four hundred';
           case 5:
           return 'five hundred';
           case 6:
           return 'six hundred';
           case 7:
           return 'seven hundred';
           case 8:
           return 'eight hundred';
           case 9:
           return 'nine hundred';
        }
        }
        
            if (number === 0) return 'zero';
            if (number < 10 ) {
             return firstTents(number);
            }
            if ( number === 10){
                return ThirdTents(number);
            }
          if ( number < 20 && number > 10 ) {
            return secondTents(number);
          }
        
        
          if (number < 100) { 
            if (number%10 === 0) {
              return ThirdTents(number);
            } else {
            return ThirdTents(number) +' '+ firstTents(number%10);
            }
          }
        
          if (number < 1000) { 
            if(number%100 ===0) {
              return fourTents(number);
            }
            if (number%10 ===0){
              return fourTents(number) +' '+ThirdTents(number%100);
            }
            if(number%100 < 10) {
              return fourTents(number) +' '+firstTents(number%10);
            }
            if (number%100 > 10 && number%100 < 20 ) {
              return fourTents(number) +' '+secondTents(number%100);
             } 
          return fourTents(number) +' '+ThirdTents(number%100)+' '+ firstTents(number%10);      
          }
          }
    
    
