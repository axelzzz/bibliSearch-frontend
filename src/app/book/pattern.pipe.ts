import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'patternPipe' })
export class PatternPipe implements PipeTransform {
    transform(text: string, pattern: string) {
        if(pattern !== "") {            
            var result = text.replace(new RegExp(pattern),
            `<span class="red">${pattern}</span>`);

            result = result.replace(new RegExp(pattern.charAt(0).toUpperCase() + pattern.slice(1)),
            `<span class="red">${pattern.charAt(0).toUpperCase() + pattern.slice(1)}</span>`);

            return result.replace(new RegExp(pattern.toUpperCase()),
            `<span class="red">${pattern.toUpperCase()}</span>`);
        }
        else{
            return text;
        }
    }
    
}