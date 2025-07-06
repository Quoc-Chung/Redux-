import { createSlice  } from "@reduxjs/toolkit";


const students = [
  {
    id: "1",
    name: "Nguyễn Văn An",
    email: "an.nguyen@example.com",
    diem: {
      toan: 8.5,
      ly: 7.5,
      hoa: 9.0,
    },
  },
  {
    id: "2",
    name: "Trần Thị Bình",
    email: "binh.tran@example.com",
    diem: {
      toan: 9.0,
      ly: 8.0,
      hoa: 8.5,
    },
  },
  {
    id: "3",
    name: "Lê Minh Châu",
    email: "chau.le@example.com",
    diem: {
      toan: 6.5,
      ly: 7.0,
      hoa: 6.0,
    },
  },
  {
    id: "4",
    name: "Phạm Quốc Dũng",
    email: "dung.pham@example.com",
    diem: {
      toan: 7.5,
      ly: 8.5,
      hoa: 7.0,
    },
  },
];

const initialState = {
  lstStudent: students,
};

const studentSlice = createSlice({
  name: "quan_li_student",
  initialState,
    reducers: {
        them: (state, action) => {
            state.lstStudent = [...state.lstStudent , action.payload];

        }, 
        sua: (state, action) => {

        }, 
        xoa: (state, action) => {

        }, 
        tang: (state, action) => {

        },
        giam: (state, action) => {

        }
       
    }
}); 
export const {them}  = studentSlice.actions;
export default studentSlice.reducer;

