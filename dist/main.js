(()=>{"use strict";const e=(()=>{let e,t,d;return e=document.getElementById("content"),t=document.createElement("div"),d=document.createElement("div"),{renderPage:()=>{(()=>{let d=document.createElement("div"),n=document.createElement("div");t.classList.add("header"),d.classList.add("link"),d.textContent="Home",n.classList.add("link"),n.textContent="Menu",t.appendChild(d),t.appendChild(n),e.appendChild(t)})(),(()=>{let t=document.createElement("div"),n=document.createElement("div"),i=document.createElement("img"),a=document.createElement("div");n.textContent="Best Late Night Burgers",a.textContent="St Francisco, 200 S Street",i.setAttribute("src","/src/assets/clipart4427988.png"),i.setAttribute("alt","burger logo"),d.classList.add("main"),t.classList.add("center-container"),n.classList.add("description"),a.classList.add("description"),t.appendChild(n),t.appendChild(i),t.appendChild(a),d.appendChild(t),e.appendChild(d)})()},deleteContents:()=>{e.removeChild(d)}}})();let t=(()=>{let e,t,d,n=()=>{e=document.getElementById("content"),t=document.createElement("div"),t.classList.add("menu-container"),d=document.createElement("div"),d.classList.add("menu")};n();let i=(e,d)=>{let n=document.createElement("div");n.classList.add("card");let i=document.createElement("img");i.setAttribute("src",d),i.setAttribute("alt","image");let a=document.createElement("div"),l=document.createElement("h4");l.textContent=e,a.appendChild(l),n.appendChild(i),n.appendChild(a),t.appendChild(n)};return{renderPage:()=>{n(),i("Big Cheese","https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F9%2F2021%2F07%2F13%2FUltimate-Veggie-Burgers-FT-Recipe-0821.jpg&q=85"),i("Big Meat","https://www.jessicagavin.com/wp-content/uploads/2020/05/grilled-burgers-34-1200.jpg"),i("Big Fat","https://www.bigbelly-cluj.ro/filehandler/ProductFirstFile/0x0/cheese-max-burger-en-390.jpg?v=637610767161548308"),d.appendChild(t),e.appendChild(d)},deleteContents:()=>{e.removeChild(main)}}})();const d=t;(()=>{e.renderPage();let t=document.querySelector(".header"),n=t.firstChild,i=t.lastChild;n.addEventListener("click",(()=>{d.deleteContents(),e.renderPage()})),i.addEventListener("click",(()=>{e.deleteContents(),d.renderPage()}))})()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoibUJBOEVBLFFBOUVlLE1BRVgsSUFBSUEsRUFDQUMsRUFDQUMsRUFvRUosT0EvRElGLEVBQVVHLFNBQVNDLGVBQWUsV0FDbENILEVBQVNFLFNBQVNFLGNBQWMsT0FDaENILEVBQU9DLFNBQVNFLGNBQWMsT0E2RDNCLENBQUNDLFdBVFMsS0E5Q0UsTUFFZixJQUFJQyxFQUFZSixTQUFTRSxjQUFjLE9BQ25DRyxFQUFhTCxTQUFTRSxjQUFjLE9BRXhDSixFQUFPUSxVQUFVQyxJQUFJLFVBQ3JCSCxFQUFVRSxVQUFVQyxJQUFJLFFBQ3hCSCxFQUFVSSxZQUFjLE9BQ3hCSCxFQUFXQyxVQUFVQyxJQUFJLFFBQ3pCRixFQUFXRyxZQUFjLE9BRXpCVixFQUFPVyxZQUFZTCxHQUNuQk4sRUFBT1csWUFBWUosR0FFbkJSLEVBQVFZLFlBQVlYLElBaUNwQlksR0E5QmEsTUFFYixJQUFJQyxFQUFrQlgsU0FBU0UsY0FBYyxPQUV6Q1UsRUFBbUJaLFNBQVNFLGNBQWMsT0FDMUNXLEVBQWNiLFNBQVNFLGNBQWMsT0FDckNZLEVBQW9CZCxTQUFTRSxjQUFjLE9BRS9DVSxFQUFpQkosWUFBYywwQkFDL0JNLEVBQWtCTixZQUFjLDZCQUVoQ0ssRUFBWUUsYUFBYSxNQUFPLGtDQUNoQ0YsRUFBWUUsYUFBYSxNQUFPLGVBRWhDaEIsRUFBS08sVUFBVUMsSUFBSSxRQUNuQkksRUFBZ0JMLFVBQVVDLElBQUksb0JBQzlCSyxFQUFpQk4sVUFBVUMsSUFBSSxlQUMvQk8sRUFBa0JSLFVBQVVDLElBQUksZUFFaENJLEVBQWdCRixZQUFZRyxHQUM1QkQsRUFBZ0JGLFlBQVlJLEdBQzVCRixFQUFnQkYsWUFBWUssR0FFNUJmLEVBQUtVLFlBQVlFLEdBRWpCZCxFQUFRWSxZQUFZVixJQU1wQmlCLElBT2dCQyxlQUpDLEtBQ2pCcEIsRUFBUXFCLFlBQVluQixNQXJFYixHQ0FmLElBQUlvQixFQUFPLE1BRVAsSUFBSXRCLEVBQ0F1QixFQUNBQyxFQUVBQyxFQUFPLEtBRVB6QixFQUFVRyxTQUFTQyxlQUFlLFdBRWxDbUIsRUFBZ0JwQixTQUFTRSxjQUFjLE9BQ3ZDa0IsRUFBY2QsVUFBVUMsSUFBSSxrQkFFNUJjLEVBQU9yQixTQUFTRSxjQUFjLE9BQzlCbUIsRUFBS2YsVUFBVUMsSUFBSSxTQUl2QmUsSUFFQSxJQUFJQyxFQUFhLENBQUNDLEVBQU9DLEtBRXJCLElBQUlDLEVBQU8xQixTQUFTRSxjQUFjLE9BQ2xDd0IsRUFBS3BCLFVBQVVDLElBQUksUUFFbkIsSUFBSW9CLEVBQVEzQixTQUFTRSxjQUFjLE9BQ25DeUIsRUFBTVosYUFBYSxNQUFPVSxHQUMxQkUsRUFBTVosYUFBYSxNQUFPLFNBRTFCLElBQUlhLEVBQVk1QixTQUFTRSxjQUFjLE9BQ25DMkIsRUFBSzdCLFNBQVNFLGNBQWMsTUFFaEMyQixFQUFHckIsWUFBY2dCLEVBRWpCSSxFQUFVbkIsWUFBWW9CLEdBRXRCSCxFQUFLakIsWUFBWWtCLEdBQ2pCRCxFQUFLakIsWUFBWW1CLEdBRWpCUixFQUFjWCxZQUFZaUIsSUFnQjlCLE1BQU8sQ0FBQ3ZCLFdBYlMsS0FDYm1CLElBQ0FDLEVBQVcsYUFBYyx5TEFDekJBLEVBQVcsV0FBWSx1RkFDdkJBLEVBQVcsVUFBVyxtSEFDdEJGLEVBQUtaLFlBQVlXLEdBQ2pCdkIsRUFBUVksWUFBWVksSUFPSkosZUFKQyxLQUNqQnBCLEVBQVFxQixZQUFZbkIsU0FwRGpCLEdBMkRYLFVDeERZLE1BRVIsZUFFQSxJQUFJRCxFQUFTRSxTQUFTOEIsY0FBYyxXQUVoQ0MsRUFBV2pDLEVBQU9rQyxXQUNsQkMsRUFBY25DLEVBQU9vQyxVQUV6QkgsRUFBU0ksaUJBQWlCLFNBQVMsS0FDL0IsbUJBQ0Esa0JBR0pGLEVBQVlFLGlCQUFpQixTQUFTLEtBQ2xDLG1CQUNBLG1CQWhCSSxJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9ob21lcGFnZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgSG9tZVBhZ2UgPSAoKCkgPT4ge1xuXG4gICAgbGV0IGNvbnRlbnQ7XG4gICAgbGV0IGhlYWRlcjtcbiAgICBsZXQgbWFpbjtcblxuXG4gICAgbGV0IGluaXQgPSAoKSA9PiB7XG5cbiAgICAgICAgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG4gICAgICAgIGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICB9XG5cbiAgICBpbml0KCk7XG5cbiAgICBsZXQgcmVuZGVySGVhZGVyID0gKCkgPT4ge1xuXG4gICAgICAgIGxldCBmaXJzdExpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbGV0IHNlY29uZExpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgnaGVhZGVyJyk7XG4gICAgICAgIGZpcnN0TGluay5jbGFzc0xpc3QuYWRkKCdsaW5rJyk7XG4gICAgICAgIGZpcnN0TGluay50ZXh0Q29udGVudCA9ICdIb21lJztcbiAgICAgICAgc2Vjb25kTGluay5jbGFzc0xpc3QuYWRkKCdsaW5rJyk7XG4gICAgICAgIHNlY29uZExpbmsudGV4dENvbnRlbnQgPSAnTWVudSc7XG5cbiAgICAgICAgaGVhZGVyLmFwcGVuZENoaWxkKGZpcnN0TGluayk7XG4gICAgICAgIGhlYWRlci5hcHBlbmRDaGlsZChzZWNvbmRMaW5rKTtcblxuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKGhlYWRlcik7XG4gICAgfVxuXG4gICAgbGV0IHJlbmRlckJvZHkgPSAoKSA9PiB7XG5cbiAgICAgICAgbGV0IGNlbnRlckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgIGxldCBmaXJzdERlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGxldCBidXJnZXJJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICBsZXQgc2Vjb25kRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICBmaXJzdERlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gXCJCZXN0IExhdGUgTmlnaHQgQnVyZ2Vyc1wiO1xuICAgICAgICBzZWNvbmREZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IFwiU3QgRnJhbmNpc2NvLCAyMDAgUyBTdHJlZXRcIjtcblxuICAgICAgICBidXJnZXJJbWFnZS5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgXCIvc3JjL2Fzc2V0cy9jbGlwYXJ0NDQyNzk4OC5wbmdcIik7XG4gICAgICAgIGJ1cmdlckltYWdlLnNldEF0dHJpYnV0ZShcImFsdFwiLCBcImJ1cmdlciBsb2dvXCIpO1xuXG4gICAgICAgIG1haW4uY2xhc3NMaXN0LmFkZChcIm1haW5cIik7XG4gICAgICAgIGNlbnRlckNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiY2VudGVyLWNvbnRhaW5lclwiKTtcbiAgICAgICAgZmlyc3REZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCdkZXNjcmlwdGlvbicpO1xuICAgICAgICBzZWNvbmREZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCdkZXNjcmlwdGlvbicpO1xuXG4gICAgICAgIGNlbnRlckNvbnRhaW5lci5hcHBlbmRDaGlsZChmaXJzdERlc2NyaXB0aW9uKTtcbiAgICAgICAgY2VudGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKGJ1cmdlckltYWdlKTtcbiAgICAgICAgY2VudGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKHNlY29uZERlc2NyaXB0aW9uKTtcblxuICAgICAgICBtYWluLmFwcGVuZENoaWxkKGNlbnRlckNvbnRhaW5lcik7XG5cbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChtYWluKTtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgbGV0IHJlbmRlclBhZ2UgPSAoKSA9PiB7XG4gICAgICAgIHJlbmRlckhlYWRlcigpO1xuICAgICAgICByZW5kZXJCb2R5KCk7XG4gICAgfVxuXG4gICAgbGV0IGRlbGV0ZUNvbnRlbnRzID0gKCkgPT4ge1xuICAgICAgICBjb250ZW50LnJlbW92ZUNoaWxkKG1haW4pO1xuICAgIH1cblxuICAgIHJldHVybiB7cmVuZGVyUGFnZSwgZGVsZXRlQ29udGVudHN9O1xuXG59KSgpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2U7IiwibGV0IE1lbnUgPSAoKCkgPT4ge1xuXG4gICAgbGV0IGNvbnRlbnQ7XG4gICAgbGV0IG1lbnVDb250YWluZXI7XG4gICAgbGV0IG1lbnU7XG5cbiAgICBsZXQgaW5pdCA9ICgpID0+IHtcblxuICAgICAgICBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcblxuICAgICAgICBtZW51Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIG1lbnVDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbWVudS1jb250YWluZXInKTtcblxuICAgICAgICBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIG1lbnUuY2xhc3NMaXN0LmFkZCgnbWVudScpO1xuXG4gICAgfVxuXG4gICAgaW5pdCgpO1xuXG4gICAgbGV0IGNyZWF0ZUNhcmQgPSAodGl0bGUsIGxpbmspID0+ICB7XG5cbiAgICAgICAgbGV0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY2FyZC5jbGFzc0xpc3QuYWRkKCdjYXJkJyk7XG5cbiAgICAgICAgbGV0IGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgIGltYWdlLnNldEF0dHJpYnV0ZShcInNyY1wiLCBsaW5rKTtcbiAgICAgICAgaW1hZ2Uuc2V0QXR0cmlidXRlKFwiYWx0XCIsIFwiaW1hZ2VcIik7XG5cbiAgICAgICAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIGxldCBoNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XG4gICAgICAgIFxuICAgICAgICBoNC50ZXh0Q29udGVudCA9IHRpdGxlO1xuXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChoNCk7XG5cbiAgICAgICAgY2FyZC5hcHBlbmRDaGlsZChpbWFnZSk7XG4gICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcblxuICAgICAgICBtZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKGNhcmQpO1xuICAgIH1cblxuICAgIGxldCByZW5kZXJQYWdlID0gKCkgPT4ge1xuICAgICAgICBpbml0KCk7XG4gICAgICAgIGNyZWF0ZUNhcmQoXCJCaWcgQ2hlZXNlXCIsIFwiaHR0cHM6Ly9pbWFnZXN2Yy5tZXJlZGl0aGNvcnAuaW8vdjMvbW0vaW1hZ2U/dXJsPWh0dHBzJTNBJTJGJTJGc3RhdGljLm9uZWNtcy5pbyUyRndwLWNvbnRlbnQlMkZ1cGxvYWRzJTJGc2l0ZXMlMkY5JTJGMjAyMSUyRjA3JTJGMTMlMkZVbHRpbWF0ZS1WZWdnaWUtQnVyZ2Vycy1GVC1SZWNpcGUtMDgyMS5qcGcmcT04NVwiKTtcbiAgICAgICAgY3JlYXRlQ2FyZChcIkJpZyBNZWF0XCIsIFwiaHR0cHM6Ly93d3cuamVzc2ljYWdhdmluLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAyMC8wNS9ncmlsbGVkLWJ1cmdlcnMtMzQtMTIwMC5qcGdcIik7XG4gICAgICAgIGNyZWF0ZUNhcmQoXCJCaWcgRmF0XCIsIFwiaHR0cHM6Ly93d3cuYmlnYmVsbHktY2x1ai5yby9maWxlaGFuZGxlci9Qcm9kdWN0Rmlyc3RGaWxlLzB4MC9jaGVlc2UtbWF4LWJ1cmdlci1lbi0zOTAuanBnP3Y9NjM3NjEwNzY3MTYxNTQ4MzA4XCIpO1xuICAgICAgICBtZW51LmFwcGVuZENoaWxkKG1lbnVDb250YWluZXIpO1xuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKG1lbnUpO1xuICAgIH1cblxuICAgIGxldCBkZWxldGVDb250ZW50cyA9ICgpID0+IHtcbiAgICAgICAgY29udGVudC5yZW1vdmVDaGlsZChtYWluKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge3JlbmRlclBhZ2UsIGRlbGV0ZUNvbnRlbnRzfTtcblxufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgTWVudTsiLCJpbXBvcnQgSG9tZVBhZ2UgZnJvbSAnLi9ob21lcGFnZS5qcyc7XG5pbXBvcnQgTWVudSBmcm9tICcuL21lbnUuanMnO1xuXG5sZXQgSW5kZXggPSAoKCkgPT4ge1xuXG4gICAgSG9tZVBhZ2UucmVuZGVyUGFnZSgpO1xuXG4gICAgbGV0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXInKTtcblxuICAgIGxldCBob21lTGluayA9IGhlYWRlci5maXJzdENoaWxkO1xuICAgIGxldCBjb250YWN0TGluayA9IGhlYWRlci5sYXN0Q2hpbGQ7XG5cbiAgICBob21lTGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgTWVudS5kZWxldGVDb250ZW50cygpO1xuICAgICAgICBIb21lUGFnZS5yZW5kZXJQYWdlKCk7XG4gICAgfSlcblxuICAgIGNvbnRhY3RMaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBIb21lUGFnZS5kZWxldGVDb250ZW50cygpO1xuICAgICAgICBNZW51LnJlbmRlclBhZ2UoKTtcbiAgICB9KVxuXG59KSgpO1xuXG4iXSwibmFtZXMiOlsiY29udGVudCIsImhlYWRlciIsIm1haW4iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY3JlYXRlRWxlbWVudCIsInJlbmRlclBhZ2UiLCJmaXJzdExpbmsiLCJzZWNvbmRMaW5rIiwiY2xhc3NMaXN0IiwiYWRkIiwidGV4dENvbnRlbnQiLCJhcHBlbmRDaGlsZCIsInJlbmRlckhlYWRlciIsImNlbnRlckNvbnRhaW5lciIsImZpcnN0RGVzY3JpcHRpb24iLCJidXJnZXJJbWFnZSIsInNlY29uZERlc2NyaXB0aW9uIiwic2V0QXR0cmlidXRlIiwicmVuZGVyQm9keSIsImRlbGV0ZUNvbnRlbnRzIiwicmVtb3ZlQ2hpbGQiLCJNZW51IiwibWVudUNvbnRhaW5lciIsIm1lbnUiLCJpbml0IiwiY3JlYXRlQ2FyZCIsInRpdGxlIiwibGluayIsImNhcmQiLCJpbWFnZSIsImNvbnRhaW5lciIsImg0IiwicXVlcnlTZWxlY3RvciIsImhvbWVMaW5rIiwiZmlyc3RDaGlsZCIsImNvbnRhY3RMaW5rIiwibGFzdENoaWxkIiwiYWRkRXZlbnRMaXN0ZW5lciJdLCJzb3VyY2VSb290IjoiIn0=