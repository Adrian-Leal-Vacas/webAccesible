
        function changeFont(targetClass, font) {
            document.querySelector('.' + targetClass).style.fontFamily = font;
        }

        function increaseTextSize(targetClass) {
            document.querySelector('.' + targetClass).style.fontSize = '20px';
        }

        function decreaseTextSize(targetClass) {
            document.querySelector('.' + targetClass).style.fontSize = '25px';
        }

        function adjustLineSpacing(targetClass, size) {
            const element = document.querySelector('.' + targetClass);
            switch (size) {
                case 'small':
                    element.style.lineHeight = '2.0';
                    break;
                case 'medium':
                    element.style.lineHeight = '4.0';
                    break;
                case 'large':
                    element.style.lineHeight = '6.0';
                    break;
                default:
                    break;
            }
        }

        function adjustWordSpacing(targetClass, size) {
            const element = document.querySelector('.' + targetClass);
            switch (size) {
                case 'small':
                    element.style.wordSpacing = '0px';
                    break;
                case 'medium':
                    element.style.wordSpacing = '10px';
                    break;
                case 'large':
                    element.style.wordSpacing = '30px';
                    break;
                default:
                    break;
            }
        }
