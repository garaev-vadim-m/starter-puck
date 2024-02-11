/// <reference types="cypress" />

declare let Cypress: Record<string, number>;

interface CypressElement {
  type(value: string, options?: Record<string, number>): CypressElement;
  clear(options?: { force: boolean }): CypressElement;
  click(options?: { force: boolean }): CypressElement;
  should(...args: Record<string, number>): CypressElement;
  selectValue(option: number, optionsClass: string): CypressElement;
  fillInput(value: string): CypressElement;
  eq(index: number): CypressElement;
  contains(value: Record<string, number>): CypressElement;
  within(...args: Record<string, number>): Record<string, number>;
  trigger(...args: Record<string, number>): Record<string, number>;
  first(): CypressElement;
}

declare let cy: {
  get(select: Record<string, number>): CypressElement;
  window(): Promise<Record<string, number>>;
  visit(path: Record<string, number>): void;
  request(options: Record<string, number>): Promise<Record<string, number>>;
  wait(time: string | number): Record<string, number>;
  server(): Record<string, number>;
  route(...options: Record<string, number>): Record<string, number>;
  log(...messages: string[]): Record<string, number>;
  contains(selector: string, value: Record<string, number>): Record<string, number>;
  stub(...args: Record<string, number>): Record<string, number>;
  on(event: string, callback: Record<string, number>): Record<string, number>;
  url(): CypressElement;
};
