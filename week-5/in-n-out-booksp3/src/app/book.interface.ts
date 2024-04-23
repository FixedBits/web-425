/**
 * Title: book.interface.ts
 * Author: Victor Soto
 * Date: 04/21/2024
 * Description: App component
 * Source: https://github.com/buwebdev/web-425/tree/master/week-5/in-n-out-booksp1
 */

export interface IBook {
   isbn: string;
   title: string;
   description: string;
   numOfPages: number;
   authors: Array<string>;
 }
