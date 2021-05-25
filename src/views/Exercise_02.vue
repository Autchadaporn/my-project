<template>
  <div id="exercise_02">
    <h1>Exercise 2 v-model (Register Form)</h1>
    <div class="container">
        <div class="row">
        <div class="col-6">
             <div class="card">
                 <form action="">
                    <div class="form-group">
                        <label for="name">ชื่อ:</label>
                        <input v-model="myData.name" type="text" class="form-control" id="name" name="myData.name" />
                    </div>
                    <div class="form-group">
                        <label for="phone">เบอร์:</label>
                        <input v-model="myData.phone" type="text" class="form-control" id="phone" name="myData.phone" />
                    </div>
                    <div class="form-group">
                        <label for="adress">ทีอยู่:</label>
                        <input v-model="myData.adress" type="text" class="form-control" id="adress" name="myData.adress" />
                    </div>
                    <label for="adress">เพศ:</label>
                    <div class="form-check">
                    <input v-model="myData.gender"
                        class="form-check-input"
                        type="radio"
                        name="myData.gender"
                        id="male"
                        value="ชาย"
                    />
                    <label class="form-check-label" for="male">
                        ชาย
                    </label>
                    </div>
                    <div class="form-check">
                    <input v-model="myData.gender"
                        class="form-check-input"
                        type="radio"
                        name="myData.gender"
                        id="female"
                        value="หญิง"
                    />
                    <label class="form-check-label" for="female">
                        หญฺิง
                    </label>
                    </div>
                    <div class="dropdown">
                    <select name="myData.degree" id="degree" v-model="myData.degree">
                        <option value="">เลือกระดับการศึกษา</option>
                        <option value="ประถมศึกษา">ประถมศึกษา</option>
                        <option value="มัธยมศึกษา">มัธยมศึกษา</option>
                        <option value="ปริญญาตรี">ปริญญาตรี</option>
                        <option value="ปริญญาโท">ปริญญาโท</option>
                        <option value="ปริญญาเอก">ปริญญาเอก</option>
                    </select>
                    </div>
                    <div class="form-check">
                    <input v-model="myData.news"
                        class="form-check-input"
                        type="checkbox"
                        value="ใช่"
                        id="news"
                    />
                    <label class="form-check-label" for="flexCheckChecked">
                        ต้องการรับข้อมูลข่าวสารในอนาคตหรือไม่ (ไม่บังคับ)
                    </label>
                    </div>
                    <button @click="clickSubmit = true" type="button" class="btn btn-primary" >Submit</button>
                </form>
            </div>
        </div>
        <div v-if="clickSubmit" class="col-6">
            <div class="card">
                <div>ชื่อ: {{myData.name}}</div>
                <div>เบอร์โทร: {{myData.phone}}</div>
                <div>ที่อยู่: {{myData.adress}}</div>
                <div>เพศ: {{myData.gender}}</div>
                <div>ระดับการศึกษา: {{myData.degree}}</div>
                <div>ต้องการรับข้อมูลข่าวสารในอนาคต: {{myData.news}}</div>
                <div>
                    <button @click="clickSubmit = false; myData=''" class="btn btn-primary-danger" type="button">Clear Data</button>
                </div>
            </div>
        </div>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'exercise_02',
  data () {
    return {
      clickSubmit: false,
      myData: {
        name: '',
        phone: '',
        adress: '',
        gender: '',
        degree: '',
        news: ''
      }
    }
  },
  methods: {
    onClickClear () {
      return {
      }
    }

  }
}
</script>
