export class Data {
  public static dataHoraAtualFormatada(): string {
    return this.formataDataHora(new Date());
  }

  public static formataDataHora(data: Date) {
    const diaFormatado = data.getDate().toString().length === 1 ? `0${data.getDate()}` : data.getDate();
    const mesFormatado = data.getMonth().toString().length === 1 ? `0${data.getMonth() + 1}` : data.getMonth() + 1;
    const horaFormatada = data.getHours().toString().length === 1 ? `0${data.getHours()}` : data.getHours();
    const minutoFormatada = data.getMinutes().toString().length === 1 ? `0${data.getMinutes()}` : data.getMinutes();
    const segundoFormatada = data.getSeconds().toString().length === 1 ? `0${data.getSeconds()}` : data.getSeconds();
    return `${diaFormatado}/${mesFormatado}/${data.getFullYear()} ${horaFormatada}:${minutoFormatada}:${segundoFormatada}`;
  }
}
