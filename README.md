# technicaltest-ptdsi

Cara setup project react:

1. Buat repository baru dengan nama 'technicaltest-ptdsi'
2. Buat project react dengan vite --> npm create vite@latest
3. Mengatur struktur repo"
   src:
   componenets --> berisi component-component untuk ditampilkan diview
   css --> berisi main.cc untuk styling
   router --> untuk routing/berpindah halaman
   store --> berisi setup redux
   validations --> berisi validasi untuk form
   view --> berisi page=page yang akan ditampilkan
4. Install package yang dibutuhkan seperti redux, react-redux, react-thunk, react router dom, reactstrap dll.
5. Selanjutnya mengerjakan filter, search, pagination

Cara setup redux:

1. Install redux, react-redux, redux-thunk
2. Buat folder store yang didalamnya ada 2 folder yaitu action dan reducer
3. Didalam folder reducer berisi rootReducer dan userReducer
4. Didalam folder action berisi http method crud
