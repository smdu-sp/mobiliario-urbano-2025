import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatarCNPJ(cnpj: string) {
  if (!cnpj) return cnpj;
  const onlyNumbers = cnpj && cnpj.replaceAll(".", "").replaceAll("/", "").replaceAll("-", "").substring(0, 14);
  if (onlyNumbers.length <= 2) return onlyNumbers.replace(/(\d{0,2})/, '$1');
  if (onlyNumbers.length <= 5) return onlyNumbers.replace(/(\d{0,2})(\d{0,3})/, '$1.$2');
  if (onlyNumbers.length <= 8) return onlyNumbers.replace(/(\d{0,2})(\d{0,3})(\d{0,3})/, '$1.$2.$3');
  if (onlyNumbers.length <= 12) return onlyNumbers.replace(/(\d{0,2})(\d{0,3})(\d{0,3})(\d{0,4})/, '$1.$2.$3/$4');
  return onlyNumbers.replace(/(\d{0,2})(\d{0,3})(\d{0,3})(\d{0,4})(\d{0,2})/, '$1.$2.$3/$4-$5');
}

export function formatarCPF(cpf: string) {
  if (!cpf) return cpf;
  const onlyNumbers = cpf && cpf.replace(/\D/g, '').substring(0, 11);
  if (onlyNumbers.length <= 3) return onlyNumbers.replace(/(\d{0,3})/, '$1');
  if (onlyNumbers.length <= 6) return onlyNumbers.replace(/(\d{0,3})(\d{0,3})/, '$1.$2');
  if (onlyNumbers.length <= 9) return onlyNumbers.replace(/(\d{0,3})(\d{0,3})(\d{0,3})/, '$1.$2.$3');
  return onlyNumbers.replace(/(\d{0,3})(\d{0,3})(\d{0,3})(\d{0,2})/, '$1.$2.$3-$4');
}

export function formatarTelefone(telefone: string) {
  if (!telefone) return telefone;
  const onlyNumbers = telefone && telefone.replace(/\D/g, '').substring(0, 11);
  if (onlyNumbers.length <= 2) return onlyNumbers.replace(/(\d{0,2})/, '$1');
  if (onlyNumbers.length <= 6) return onlyNumbers.replace(/(\d{0,2})(\d{0,4})/, '($1) $2');
  if (onlyNumbers.length <= 10) return onlyNumbers.replace(/(\d{0,2})(\d{0,4})(\d{0,4})/, '($1) $2-$3');
  return onlyNumbers.replace(/(\d{0,2})(\d{0,5})(\d{0,4})/, '($1) $2-$3');
}

export function formatarCEP(cep: string) {
  if (!cep) return cep;
  const onlyNumbers = cep && cep.replace(/\D/g, '').substring(0, 8);
  if (onlyNumbers.length <= 5) return onlyNumbers.replace(/(\d{0,5})/, '$1');
  return onlyNumbers.replace(/(\d{0,5})(\d{0,3})/, '$1-$2');
}

export function formataUF(uf: string) {
  if (!uf) return uf;
  return uf.substring(0, 2).toUpperCase();
}