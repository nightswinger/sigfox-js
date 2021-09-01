export function btoa(binary: string): string {
  return Buffer.from(binary).toString('base64')
}
