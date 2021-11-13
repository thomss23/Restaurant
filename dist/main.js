(()=>{"use strict";const e=(()=>{let e,t,n;return e=document.getElementById("content"),t=document.createElement("div"),(()=>{let n=document.createElement("div"),d=document.createElement("div");t.classList.add("header"),n.classList.add("link"),n.textContent="Home",d.classList.add("link"),d.textContent="Menu",t.appendChild(n),t.appendChild(d),e.appendChild(t)})(),{renderPage:()=>{(()=>{n=document.createElement("div");let t=document.createElement("div"),d=document.createElement("div"),i=document.createElement("img"),a=document.createElement("div");d.textContent="Best Late Night Burgers",a.textContent="St Francisco, 200 S Street",i.setAttribute("src","/src/assets/clipart4427988.png"),i.setAttribute("alt","burger logo"),n.classList.add("main"),t.classList.add("center-container"),d.classList.add("description"),a.classList.add("description"),t.appendChild(d),t.appendChild(i),t.appendChild(a),n.appendChild(t),e.appendChild(n)})()},deleteContents:()=>{e.removeChild(n)}}})();let t=(()=>{let e,t,n;e=document.getElementById("content"),t=document.createElement("div"),t.classList.add("menu-container");let d=(e,n)=>{let d=document.createElement("div");d.classList.add("card");let i=document.createElement("img");i.setAttribute("src",n),i.setAttribute("alt","image");let a=document.createElement("div"),l=document.createElement("h4");l.textContent=e,a.appendChild(l),d.appendChild(i),d.appendChild(a),t.appendChild(d)};return{renderPage:()=>{n=document.createElement("div"),n.classList.add("menu"),d("Big Cheese","https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F9%2F2021%2F07%2F13%2FUltimate-Veggie-Burgers-FT-Recipe-0821.jpg&q=85"),d("Big Meat","https://www.jessicagavin.com/wp-content/uploads/2020/05/grilled-burgers-34-1200.jpg"),d("Big Fat","https://www.bigbelly-cluj.ro/filehandler/ProductFirstFile/0x0/cheese-max-burger-en-390.jpg?v=637610767161548308"),n.appendChild(t),e.appendChild(n)},deleteContents:()=>{e.removeChild(n),t.innerHTML=""}}})();const n=t;(()=>{e.renderPage();let t=document.querySelector(".header"),d=t.firstChild,i=t.lastChild;d.addEventListener("click",(()=>{n.deleteContents(),e.renderPage()})),i.addEventListener("click",(()=>{e.deleteContents(),n.renderPage()}))})()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoibUJBNEVBLFFBNUVlLE1BRVgsSUFBSUEsRUFDQUMsRUFDQUMsRUFrRUosT0E5Q0lGLEVBQVVHLFNBQVNDLGVBQWUsV0FDbENILEVBQVNFLFNBQVNFLGNBQWMsT0FuQmpCLE1BRWYsSUFBSUMsRUFBWUgsU0FBU0UsY0FBYyxPQUNuQ0UsRUFBYUosU0FBU0UsY0FBYyxPQUV4Q0osRUFBT08sVUFBVUMsSUFBSSxVQUNyQkgsRUFBVUUsVUFBVUMsSUFBSSxRQUN4QkgsRUFBVUksWUFBYyxPQUN4QkgsRUFBV0MsVUFBVUMsSUFBSSxRQUN6QkYsRUFBV0csWUFBYyxPQUV6QlQsRUFBT1UsWUFBWUwsR0FDbkJMLEVBQU9VLFlBQVlKLEdBRW5CUCxFQUFRVyxZQUFZVixJQU1wQlcsR0E0Q0csQ0FBQ0MsV0FSUyxLQS9CQSxNQUViWCxFQUFPQyxTQUFTRSxjQUFjLE9BRTlCLElBQUlTLEVBQWtCWCxTQUFTRSxjQUFjLE9BRXpDVSxFQUFtQlosU0FBU0UsY0FBYyxPQUMxQ1csRUFBY2IsU0FBU0UsY0FBYyxPQUNyQ1ksRUFBb0JkLFNBQVNFLGNBQWMsT0FFL0NVLEVBQWlCTCxZQUFjLDBCQUMvQk8sRUFBa0JQLFlBQWMsNkJBRWhDTSxFQUFZRSxhQUFhLE1BQU8sa0NBQ2hDRixFQUFZRSxhQUFhLE1BQU8sZUFFaENoQixFQUFLTSxVQUFVQyxJQUFJLFFBQ25CSyxFQUFnQk4sVUFBVUMsSUFBSSxvQkFDOUJNLEVBQWlCUCxVQUFVQyxJQUFJLGVBQy9CUSxFQUFrQlQsVUFBVUMsSUFBSSxlQUVoQ0ssRUFBZ0JILFlBQVlJLEdBQzVCRCxFQUFnQkgsWUFBWUssR0FDNUJGLEVBQWdCSCxZQUFZTSxHQUU1QmYsRUFBS1MsWUFBWUcsR0FFakJkLEVBQVFXLFlBQVlULElBS3BCaUIsSUFPZ0JDLGVBSkMsS0FDakJwQixFQUFRcUIsWUFBWW5CLE1BbkViLEdDQWYsSUFBSW9CLEVBQU8sTUFFUCxJQUFJdEIsRUFDQXVCLEVBQ0FDLEVBSUF4QixFQUFVRyxTQUFTQyxlQUFlLFdBRWxDbUIsRUFBZ0JwQixTQUFTRSxjQUFjLE9BQ3ZDa0IsRUFBY2YsVUFBVUMsSUFBSSxrQkFPaEMsSUFBSWdCLEVBQWEsQ0FBQ0MsRUFBT0MsS0FFckIsSUFBSUMsRUFBT3pCLFNBQVNFLGNBQWMsT0FDbEN1QixFQUFLcEIsVUFBVUMsSUFBSSxRQUVuQixJQUFJb0IsRUFBUTFCLFNBQVNFLGNBQWMsT0FDbkN3QixFQUFNWCxhQUFhLE1BQU9TLEdBQzFCRSxFQUFNWCxhQUFhLE1BQU8sU0FFMUIsSUFBSVksRUFBWTNCLFNBQVNFLGNBQWMsT0FDbkMwQixFQUFLNUIsU0FBU0UsY0FBYyxNQUVoQzBCLEVBQUdyQixZQUFjZ0IsRUFFakJJLEVBQVVuQixZQUFZb0IsR0FFdEJILEVBQUtqQixZQUFZa0IsR0FDakJELEVBQUtqQixZQUFZbUIsR0FFakJQLEVBQWNaLFlBQVlpQixJQW9COUIsTUFBTyxDQUFDZixXQWpCUyxLQUNiVyxFQUFPckIsU0FBU0UsY0FBYyxPQUM5Qm1CLEVBQUtoQixVQUFVQyxJQUFJLFFBRW5CZ0IsRUFBVyxhQUFjLHlMQUN6QkEsRUFBVyxXQUFZLHVGQUN2QkEsRUFBVyxVQUFXLG1IQUV0QkQsRUFBS2IsWUFBWVksR0FDakJ2QixFQUFRVyxZQUFZYSxJQVFKSixlQUxDLEtBQ2pCcEIsRUFBUXFCLFlBQVlHLEdBQ3BCRCxFQUFjUyxVQUFZLE1BdER2QixHQTZEWCxVQzFEWSxNQUVSLGVBRUEsSUFBSS9CLEVBQVNFLFNBQVM4QixjQUFjLFdBRWhDQyxFQUFXakMsRUFBT2tDLFdBQ2xCQyxFQUFjbkMsRUFBT29DLFVBRXpCSCxFQUFTSSxpQkFBaUIsU0FBUyxLQUMvQixtQkFDQSxrQkFHSkYsRUFBWUUsaUJBQWlCLFNBQVMsS0FDbEMsbUJBQ0EsbUJBaEJJLEkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2hvbWVwYWdlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImxldCBIb21lUGFnZSA9ICgoKSA9PiB7XG5cbiAgICBsZXQgY29udGVudDtcbiAgICBsZXQgaGVhZGVyO1xuICAgIGxldCBtYWluO1xuXG4gICAgbGV0IHJlbmRlckhlYWRlciA9ICgpID0+IHtcblxuICAgICAgICBsZXQgZmlyc3RMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGxldCBzZWNvbmRMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2hlYWRlcicpO1xuICAgICAgICBmaXJzdExpbmsuY2xhc3NMaXN0LmFkZCgnbGluaycpO1xuICAgICAgICBmaXJzdExpbmsudGV4dENvbnRlbnQgPSAnSG9tZSc7XG4gICAgICAgIHNlY29uZExpbmsuY2xhc3NMaXN0LmFkZCgnbGluaycpO1xuICAgICAgICBzZWNvbmRMaW5rLnRleHRDb250ZW50ID0gJ01lbnUnO1xuXG4gICAgICAgIGhlYWRlci5hcHBlbmRDaGlsZChmaXJzdExpbmspO1xuICAgICAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoc2Vjb25kTGluayk7XG5cbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICAgIH1cblxuICAgIGxldCBpbml0ID0gKCkgPT4ge1xuICAgICAgICBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbiAgICAgICAgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHJlbmRlckhlYWRlcigpO1xuICAgIH1cblxuICAgIGluaXQoKTtcblxuICAgIGxldCByZW5kZXJCb2R5ID0gKCkgPT4ge1xuXG4gICAgICAgIG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgXG4gICAgICAgIGxldCBjZW50ZXJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICBsZXQgZmlyc3REZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBsZXQgYnVyZ2VySW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgbGV0IHNlY29uZERlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgZmlyc3REZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IFwiQmVzdCBMYXRlIE5pZ2h0IEJ1cmdlcnNcIjtcbiAgICAgICAgc2Vjb25kRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBcIlN0IEZyYW5jaXNjbywgMjAwIFMgU3RyZWV0XCI7XG5cbiAgICAgICAgYnVyZ2VySW1hZ2Uuc2V0QXR0cmlidXRlKFwic3JjXCIsIFwiL3NyYy9hc3NldHMvY2xpcGFydDQ0Mjc5ODgucG5nXCIpO1xuICAgICAgICBidXJnZXJJbWFnZS5zZXRBdHRyaWJ1dGUoXCJhbHRcIiwgXCJidXJnZXIgbG9nb1wiKTtcblxuICAgICAgICBtYWluLmNsYXNzTGlzdC5hZGQoXCJtYWluXCIpO1xuICAgICAgICBjZW50ZXJDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImNlbnRlci1jb250YWluZXJcIik7XG4gICAgICAgIGZpcnN0RGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgnZGVzY3JpcHRpb24nKTtcbiAgICAgICAgc2Vjb25kRGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgnZGVzY3JpcHRpb24nKTtcblxuICAgICAgICBjZW50ZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoZmlyc3REZXNjcmlwdGlvbik7XG4gICAgICAgIGNlbnRlckNvbnRhaW5lci5hcHBlbmRDaGlsZChidXJnZXJJbWFnZSk7XG4gICAgICAgIGNlbnRlckNvbnRhaW5lci5hcHBlbmRDaGlsZChzZWNvbmREZXNjcmlwdGlvbik7XG5cbiAgICAgICAgbWFpbi5hcHBlbmRDaGlsZChjZW50ZXJDb250YWluZXIpO1xuXG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWFpbik7XG4gICAgICAgIFxuICAgIH1cblxuICAgIGxldCByZW5kZXJQYWdlID0gKCkgPT4ge1xuICAgICAgICByZW5kZXJCb2R5KCk7XG4gICAgfVxuXG4gICAgbGV0IGRlbGV0ZUNvbnRlbnRzID0gKCkgPT4ge1xuICAgICAgICBjb250ZW50LnJlbW92ZUNoaWxkKG1haW4pO1xuICAgIH1cblxuICAgIHJldHVybiB7cmVuZGVyUGFnZSwgZGVsZXRlQ29udGVudHN9O1xuXG59KSgpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2U7IiwibGV0IE1lbnUgPSAoKCkgPT4ge1xuXG4gICAgbGV0IGNvbnRlbnQ7XG4gICAgbGV0IG1lbnVDb250YWluZXI7XG4gICAgbGV0IG1lbnU7XG5cbiAgICBsZXQgaW5pdCA9ICgpID0+IHtcblxuICAgICAgICBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcblxuICAgICAgICBtZW51Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIG1lbnVDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbWVudS1jb250YWluZXInKTtcblxuXG4gICAgfVxuXG4gICAgaW5pdCgpO1xuXG4gICAgbGV0IGNyZWF0ZUNhcmQgPSAodGl0bGUsIGxpbmspID0+ICB7XG5cbiAgICAgICAgbGV0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY2FyZC5jbGFzc0xpc3QuYWRkKCdjYXJkJyk7XG5cbiAgICAgICAgbGV0IGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgIGltYWdlLnNldEF0dHJpYnV0ZShcInNyY1wiLCBsaW5rKTtcbiAgICAgICAgaW1hZ2Uuc2V0QXR0cmlidXRlKFwiYWx0XCIsIFwiaW1hZ2VcIik7XG5cbiAgICAgICAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIGxldCBoNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XG4gICAgICAgIFxuICAgICAgICBoNC50ZXh0Q29udGVudCA9IHRpdGxlO1xuXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChoNCk7XG5cbiAgICAgICAgY2FyZC5hcHBlbmRDaGlsZChpbWFnZSk7XG4gICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcblxuICAgICAgICBtZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKGNhcmQpO1xuICAgIH1cblxuICAgIGxldCByZW5kZXJQYWdlID0gKCkgPT4ge1xuICAgICAgICBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIG1lbnUuY2xhc3NMaXN0LmFkZCgnbWVudScpO1xuXG4gICAgICAgIGNyZWF0ZUNhcmQoXCJCaWcgQ2hlZXNlXCIsIFwiaHR0cHM6Ly9pbWFnZXN2Yy5tZXJlZGl0aGNvcnAuaW8vdjMvbW0vaW1hZ2U/dXJsPWh0dHBzJTNBJTJGJTJGc3RhdGljLm9uZWNtcy5pbyUyRndwLWNvbnRlbnQlMkZ1cGxvYWRzJTJGc2l0ZXMlMkY5JTJGMjAyMSUyRjA3JTJGMTMlMkZVbHRpbWF0ZS1WZWdnaWUtQnVyZ2Vycy1GVC1SZWNpcGUtMDgyMS5qcGcmcT04NVwiKTtcbiAgICAgICAgY3JlYXRlQ2FyZChcIkJpZyBNZWF0XCIsIFwiaHR0cHM6Ly93d3cuamVzc2ljYWdhdmluLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAyMC8wNS9ncmlsbGVkLWJ1cmdlcnMtMzQtMTIwMC5qcGdcIik7XG4gICAgICAgIGNyZWF0ZUNhcmQoXCJCaWcgRmF0XCIsIFwiaHR0cHM6Ly93d3cuYmlnYmVsbHktY2x1ai5yby9maWxlaGFuZGxlci9Qcm9kdWN0Rmlyc3RGaWxlLzB4MC9jaGVlc2UtbWF4LWJ1cmdlci1lbi0zOTAuanBnP3Y9NjM3NjEwNzY3MTYxNTQ4MzA4XCIpO1xuXG4gICAgICAgIG1lbnUuYXBwZW5kQ2hpbGQobWVudUNvbnRhaW5lcik7XG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWVudSk7XG4gICAgfVxuXG4gICAgbGV0IGRlbGV0ZUNvbnRlbnRzID0gKCkgPT4ge1xuICAgICAgICBjb250ZW50LnJlbW92ZUNoaWxkKG1lbnUpO1xuICAgICAgICBtZW51Q29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuICAgIH1cblxuICAgIHJldHVybiB7cmVuZGVyUGFnZSwgZGVsZXRlQ29udGVudHN9O1xuXG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBNZW51OyIsImltcG9ydCBIb21lUGFnZSBmcm9tICcuL2hvbWVwYWdlLmpzJztcbmltcG9ydCBNZW51IGZyb20gJy4vbWVudS5qcyc7XG5cbmxldCBJbmRleCA9ICgoKSA9PiB7XG5cbiAgICBIb21lUGFnZS5yZW5kZXJQYWdlKCk7XG5cbiAgICBsZXQgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcicpO1xuXG4gICAgbGV0IGhvbWVMaW5rID0gaGVhZGVyLmZpcnN0Q2hpbGQ7XG4gICAgbGV0IGNvbnRhY3RMaW5rID0gaGVhZGVyLmxhc3RDaGlsZDtcblxuICAgIGhvbWVMaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBNZW51LmRlbGV0ZUNvbnRlbnRzKCk7XG4gICAgICAgIEhvbWVQYWdlLnJlbmRlclBhZ2UoKTtcbiAgICB9KVxuXG4gICAgY29udGFjdExpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIEhvbWVQYWdlLmRlbGV0ZUNvbnRlbnRzKCk7XG4gICAgICAgIE1lbnUucmVuZGVyUGFnZSgpO1xuICAgIH0pXG5cbn0pKCk7XG5cbiJdLCJuYW1lcyI6WyJjb250ZW50IiwiaGVhZGVyIiwibWFpbiIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjcmVhdGVFbGVtZW50IiwiZmlyc3RMaW5rIiwic2Vjb25kTGluayIsImNsYXNzTGlzdCIsImFkZCIsInRleHRDb250ZW50IiwiYXBwZW5kQ2hpbGQiLCJyZW5kZXJIZWFkZXIiLCJyZW5kZXJQYWdlIiwiY2VudGVyQ29udGFpbmVyIiwiZmlyc3REZXNjcmlwdGlvbiIsImJ1cmdlckltYWdlIiwic2Vjb25kRGVzY3JpcHRpb24iLCJzZXRBdHRyaWJ1dGUiLCJyZW5kZXJCb2R5IiwiZGVsZXRlQ29udGVudHMiLCJyZW1vdmVDaGlsZCIsIk1lbnUiLCJtZW51Q29udGFpbmVyIiwibWVudSIsImNyZWF0ZUNhcmQiLCJ0aXRsZSIsImxpbmsiLCJjYXJkIiwiaW1hZ2UiLCJjb250YWluZXIiLCJoNCIsImlubmVySFRNTCIsInF1ZXJ5U2VsZWN0b3IiLCJob21lTGluayIsImZpcnN0Q2hpbGQiLCJjb250YWN0TGluayIsImxhc3RDaGlsZCIsImFkZEV2ZW50TGlzdGVuZXIiXSwic291cmNlUm9vdCI6IiJ9