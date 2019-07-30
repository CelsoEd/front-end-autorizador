import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'cpf'
})
export class CpfPipe implements PipeTransform {

  transform(value: string, args?: any): any {
    if (value) {
      let cpfFormatado = '';

      cpfFormatado += value.substring(0, 3);
      cpfFormatado += '.';
      cpfFormatado += value.substring(3, 6);
      cpfFormatado += '.';
      cpfFormatado += value.substring(6, 9);
      cpfFormatado += '-';
      cpfFormatado += value.substring(9);

      return cpfFormatado;
    }

    return null;
  }

}
