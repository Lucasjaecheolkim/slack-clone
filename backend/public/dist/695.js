(self.webpackChunksleact_ts_front=self.webpackChunksleact_ts_front||[]).push([[695],{9695:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>u});var l=a(8678),n=a(3046),r=a(3564),s=a(9669),c=a.n(s),i=a(7294),m=a(5977),o=a(6848);const u=()=>{const{data:e,error:t,revalidate:a}=(0,o.ZP)("/api/user",r.Z),[s,u]=(0,i.useState)(""),[p,d]=(0,l.Z)(""),[E,h]=(0,l.Z)(""),w=(0,i.useCallback)((e=>{e.preventDefault(),c().post("/api/login",{email:p,password:E},{withCredentials:!0}).then((()=>{a()})).catch((e=>{console.error(e.response),u(e.response?.data)}))}),[p,E]);return e?i.createElement(m.l_,{to:"/workspace/slack/channel/slack"}):i.createElement("div",{id:"container"},i.createElement(n.h4,null,"Sleact"),i.createElement(n.l0,{onSubmit:w},i.createElement(n.__,{id:"email-label"},i.createElement("span",null,"이메일 주소"),i.createElement("div",null,i.createElement(n.II,{type:"email",id:"email",name:"email",value:p,onChange:d}))),i.createElement(n.__,{id:"password-label"},i.createElement("span",null,"비밀번호"),i.createElement("div",null,i.createElement(n.II,{type:"password",id:"password",name:"password",value:E,onChange:h})),s&&i.createElement(n.jj,null,s)),i.createElement(n.zx,{type:"submit"},"로그인")),i.createElement(n.Ji,null,"아직 회원이 아니신가요? ",i.createElement("a",{href:"/signup"},"회원가입 하러가기")))}}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zbGVhY3QtdHMtZnJvbnQvLi9wYWdlcy9Mb2dJbi9pbmRleC50c3giXSwibmFtZXMiOlsiZGF0YSIsInVzZXJEYXRhIiwiZXJyb3IiLCJyZXZhbGlkYXRlIiwidXNlU1dSIiwiZmV0Y2hlciIsImxvZ0luRXJyb3IiLCJzZXRMb2dJbkVycm9yIiwidXNlU3RhdGUiLCJlbWFpbCIsIm9uQ2hhbmdlRW1haWwiLCJ1c2VJbnB1dCIsInBhc3N3b3JkIiwib25DaGFuZ2VQYXNzd29yZCIsIm9uU3VibWl0IiwidXNlQ2FsbGJhY2siLCJlIiwicHJldmVudERlZmF1bHQiLCJheGlvcyIsIndpdGhDcmVkZW50aWFscyIsInRoZW4iLCJjYXRjaCIsImNvbnNvbGUiLCJyZXNwb25zZSIsInRvIiwiaWQiLCJ0eXBlIiwibmFtZSIsInZhbHVlIiwib25DaGFuZ2UiLCJocmVmIl0sIm1hcHBpbmdzIjoia09BUUEsTUEwREEsRUExRGMsS0FDWixNQUFRQSxLQUFNQyxFQUFSLE1BQWtCQyxFQUFsQixXQUF5QkMsSUFBZUMsUUFBTyxZQUFhQyxNQUMzREMsRUFBWUMsSUFBaUJDLGNBQVMsS0FDdENDLEVBQU9DLElBQWlCQyxPQUFTLEtBQ2pDQyxFQUFVQyxJQUFvQkYsT0FBUyxJQUN4Q0csR0FBV0Msa0JBQ2RDLElBQ0NBLEVBQUVDLGlCQUNGQyxTQUVJLGFBQ0EsQ0FBRVQsUUFBT0csWUFDVCxDQUNFTyxpQkFBaUIsSUFHcEJDLE1BQUssS0FDSmpCLE9BRURrQixPQUFPbkIsSUFDTm9CLFFBQVFwQixNQUFNQSxFQUFNcUIsVUFDcEJoQixFQUFjTCxFQUFNcUIsVUFBVXZCLFdBR3BDLENBQUNTLEVBQU9HLElBR1YsT0FBSVgsRUFDSyxnQkFBQyxLQUFELENBQVV1QixHQUFHLGlDQUlwQix1QkFBS0MsR0FBRyxhQUNOLGdCQUFDLEtBQUQsZUFDQSxnQkFBQyxLQUFELENBQU1YLFNBQVVBLEdBQ2QsZ0JBQUMsS0FBRCxDQUFPVyxHQUFHLGVBQ1Isc0NBQ0EsMkJBQ0UsZ0JBQUMsS0FBRCxDQUFPQyxLQUFLLFFBQVFELEdBQUcsUUFBUUUsS0FBSyxRQUFRQyxNQUFPbkIsRUFBT29CLFNBQVVuQixNQUd4RSxnQkFBQyxLQUFELENBQU9lLEdBQUcsa0JBQ1Isb0NBQ0EsMkJBQ0UsZ0JBQUMsS0FBRCxDQUFPQyxLQUFLLFdBQVdELEdBQUcsV0FBV0UsS0FBSyxXQUFXQyxNQUFPaEIsRUFBVWlCLFNBQVVoQixLQUVqRlAsR0FBYyxnQkFBQyxLQUFELEtBQVFBLElBRXpCLGdCQUFDLEtBQUQsQ0FBUW9CLEtBQUssVUFBYixRQUVGLGdCQUFDLEtBQUQsc0JBRUUscUJBQUdJLEtBQUssV0FBUiIsImZpbGUiOiI2OTUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdXNlSW5wdXQgZnJvbSAnQGhvb2tzL3VzZUlucHV0JztcbmltcG9ydCB7IEJ1dHRvbiwgRXJyb3IsIEZvcm0sIEhlYWRlciwgSW5wdXQsIExhYmVsLCBMaW5rQ29udGFpbmVyIH0gZnJvbSAnQHBhZ2VzL1NpZ25VcC9zdHlsZXMnO1xuaW1wb3J0IGZldGNoZXIgZnJvbSAnQHV0aWxzL2ZldGNoZXInO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBSZWRpcmVjdCB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IHVzZVNXUiBmcm9tICdzd3InO1xuXG5jb25zdCBMb2dJbiA9ICgpID0+IHtcbiAgY29uc3QgeyBkYXRhOiB1c2VyRGF0YSwgZXJyb3IsIHJldmFsaWRhdGUgfSA9IHVzZVNXUignL2FwaS91c2VyJywgZmV0Y2hlcik7XG4gIGNvbnN0IFtsb2dJbkVycm9yLCBzZXRMb2dJbkVycm9yXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW2VtYWlsLCBvbkNoYW5nZUVtYWlsXSA9IHVzZUlucHV0KCcnKTtcbiAgY29uc3QgW3Bhc3N3b3JkLCBvbkNoYW5nZVBhc3N3b3JkXSA9IHVzZUlucHV0KCcnKTtcbiAgY29uc3Qgb25TdWJtaXQgPSB1c2VDYWxsYmFjayhcbiAgICAoZSkgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgYXhpb3NcbiAgICAgICAgLnBvc3QoXG4gICAgICAgICAgJy9hcGkvbG9naW4nLFxuICAgICAgICAgIHsgZW1haWwsIHBhc3N3b3JkIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgd2l0aENyZWRlbnRpYWxzOiB0cnVlLFxuICAgICAgICAgIH0sXG4gICAgICAgIClcbiAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIHJldmFsaWRhdGUoKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IucmVzcG9uc2UpO1xuICAgICAgICAgIHNldExvZ0luRXJyb3IoZXJyb3IucmVzcG9uc2U/LmRhdGEpO1xuICAgICAgICB9KTtcbiAgICB9LFxuICAgIFtlbWFpbCwgcGFzc3dvcmRdLFxuICApO1xuXG4gIGlmICh1c2VyRGF0YSkge1xuICAgIHJldHVybiA8UmVkaXJlY3QgdG89XCIvd29ya3NwYWNlL3NsZWFjdC9jaGFubmVsL+ydvOuwmFwiIC8+O1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGlkPVwiY29udGFpbmVyXCI+XG4gICAgICA8SGVhZGVyPlNsZWFjdDwvSGVhZGVyPlxuICAgICAgPEZvcm0gb25TdWJtaXQ9e29uU3VibWl0fT5cbiAgICAgICAgPExhYmVsIGlkPVwiZW1haWwtbGFiZWxcIj5cbiAgICAgICAgICA8c3Bhbj7snbTrqZTsnbwg7KO87IaMPC9zcGFuPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8SW5wdXQgdHlwZT1cImVtYWlsXCIgaWQ9XCJlbWFpbFwiIG5hbWU9XCJlbWFpbFwiIHZhbHVlPXtlbWFpbH0gb25DaGFuZ2U9e29uQ2hhbmdlRW1haWx9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvTGFiZWw+XG4gICAgICAgIDxMYWJlbCBpZD1cInBhc3N3b3JkLWxhYmVsXCI+XG4gICAgICAgICAgPHNwYW4+67mE67CA67KI7Zi4PC9zcGFuPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8SW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgaWQ9XCJwYXNzd29yZFwiIG5hbWU9XCJwYXNzd29yZFwiIHZhbHVlPXtwYXNzd29yZH0gb25DaGFuZ2U9e29uQ2hhbmdlUGFzc3dvcmR9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAge2xvZ0luRXJyb3IgJiYgPEVycm9yPntsb2dJbkVycm9yfTwvRXJyb3I+fVxuICAgICAgICA8L0xhYmVsPlxuICAgICAgICA8QnV0dG9uIHR5cGU9XCJzdWJtaXRcIj7roZzqt7jsnbg8L0J1dHRvbj5cbiAgICAgIDwvRm9ybT5cbiAgICAgIDxMaW5rQ29udGFpbmVyPlxuICAgICAgICDslYTsp4Eg7ZqM7JuQ7J20IOyVhOuLiOyLoOqwgOyalD8mbmJzcDtcbiAgICAgICAgPGEgaHJlZj1cIi9zaWdudXBcIj7tmozsm5DqsIDsnoUg7ZWY65+s6rCA6riwPC9hPlxuICAgICAgPC9MaW5rQ29udGFpbmVyPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTG9nSW47XG4iXSwic291cmNlUm9vdCI6IiJ9