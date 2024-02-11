/// <reference types="cypress" />
declare let Cypress: any;

interface CypressElement {
  type(value: string, options?: any): CypressElement;
  clear(options?: { force: boolean }): CypressElement;
  click(options?: { force: boolean }): CypressElement;
  should(...args: any): CypressElement;
  selectValue(option: number, optionsClass: string): CypressElement;
  fillInput(value: string): CypressElement;
  eq(index: number): CypressElement;
  contains(value: any): CypressElement;
  within(...args: any): any;
  trigger(...args: any): any;
  first(): CypressElement;
}

declare let cy: {
  get(select: any): CypressElement;
  window(): Promise<any>;
  visit(path: any): void;
  request(options: any): Promise<any>;
  wait(time: string | number): any;
  server(): any;
  route(...options: any): any;
  log(...messages: string[]): any;
  contains(selector: string, value: any): any;
  stub(...args: any): any;
  on(event: string, callback: any): any;
  url(): CypressElement;
};
