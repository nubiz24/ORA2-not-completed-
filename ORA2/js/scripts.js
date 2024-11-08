// Get the Sidebar
var mySidebar = document.getElementById("mySidebar");

// Get the DIV with overlay effect
var overlayBg = document.getElementById("myOverlay");

// Toggle between showing and hiding the sidebar, and add overlay effect
function w3_open() {
  if (mySidebar.style.display === 'block') {
    mySidebar.style.display = 'none';
    overlayBg.style.display = "none";
  } else {
    mySidebar.style.display = 'block';
    overlayBg.style.display = "block";
  }
}

// Close the sidebar with the close button
function w3_close() {
  mySidebar.style.display = "none";
  overlayBg.style.display = "none";
}
// Function to show content and update button style
function showContent(sectionId) {
  // Hide all sections
  const sections = document.querySelectorAll('.w3-container');
  sections.forEach(section => section.classList.add('hidden'));

  // Remove active class from all buttons
  const buttons = document.querySelectorAll('.w3-bar-item');
  buttons.forEach(button => button.classList.remove('active'));

  // Show selected section
  document.getElementById(sectionId).classList.remove('hidden');

  const sidebar = document.getElementById("mySidebar");
  sidebar.innerHTML = '';

  if (sectionId === 'courseInfo') {
    sidebar.innerHTML = `
    <h4 class="w3-bar-item"><b>Menu</b></h4>
    <a class="w3-bar-item w3-button w3-hover-black" href="#classInfo">Thông tin khai giảng</a>
    <a class="w3-bar-item w3-button w3-hover-black" href="#seminar">Thông tin Seminar</a>
    <a class="w3-bar-item w3-button w3-hover-black" href="#company">Thông tin công ty quan tâm</a>
  `;
  } else if (sectionId === 'info') {
    sidebar.innerHTML = `
    <h4 class="w3-bar-item"><b>Thông tin môn học</b></h4>
    <a class="w3-bar-item w3-button w3-hover-black" href="#summaryVN">Mô tả tóm tắt học phần (tiếng Việt) (*)</a>
    <a class="w3-bar-item w3-button w3-hover-black" href="#summaryEN">Mô tả tóm tắt học phần (tiếng Anh) (*)</a>
    <a class="w3-bar-item w3-button w3-hover-black" href="#contentVN">Nội dung tóm tắt học phần (tiếng Việt) (*)</a>
    <a class="w3-bar-item w3-button w3-hover-black" href="#contentEN">Nội dung tóm tắt học phần (tiếng Anh) (*)</a>
    <a class="w3-bar-item w3-button w3-hover-black" href="#reference">Sách tham khảo</a>

  `;
  } else if (sectionId === 'web-tech') {
    sidebar.innerHTML = `
    <h4 class="w3-bar-item"><b>Công nghệ Web</b></h4>
    <a class="w3-bar-item w3-button w3-hover-black" href="#frontend">1. Frontend (Giao diện người dùng)</a>
    <a class="w3-bar-item w3-button w3-hover-black" href="#backend">2. Backend (Máy chủ và xử lý dữ liệu)</a>
    <a class="w3-bar-item w3-button w3-hover-black" href="#database">3. Cơ sở dữ liệu</a>
    <a class="w3-bar-item w3-button w3-hover-black" href="#api">4. API và Tích hợp dịch vụ</a>
    <a class="w3-bar-item w3-button w3-hover-black" href="#devops">5. DevOps và Triển khai</a>
    <a class="w3-bar-item w3-button w3-hover-black" href="#security">6. Bảo mật</a>
    <a class="w3-bar-item w3-button w3-hover-black" href="#testing">7. Testing và Debugging</a>
    <a class="w3-bar-item w3-button w3-hover-black" href="#optimization">8. Performance Optimization</a>
    <a class="w3-bar-item w3-button w3-hover-black" href="#authentication">9. User Authentication & Authorization</a>
  `;
  } else if (sectionId === 'student-info') {
    sidebar.innerHTML = `
    <h4 class="w3-bar-item"><b>Thông tin sinh viên</b></h4>
    <a class="w3-bar-item w3-button w3-hover-black" href="#academic-info">Thông tin học tập</a>
    <a class="w3-bar-item w3-button w3-hover-black" href="#skills-info">Kĩ năng</a>
    <a class="w3-bar-item w3-button w3-hover-black" href="#projects-info">Dự án</a>
    <a class="w3-bar-item w3-button w3-hover-black" href="#hobbies-info">Sở thích</a>
  `;
  }

  // Add active class to clicked button
  event.target.classList.add('active');
}
window.onload = function () {
  showContent('courseInfo');
};
//-----------------------------------------------------------ORA2---------------------------------------------------------------------

  function removeMenuItemById(id) {
    // Tìm phần tử theo id và xóa nó nếu tồn tại
    const menuItem = document.getElementById(id);
    if (menuItem) {
        menuItem.remove();
    }
}

// ---------------------------------------Chỉnh sửa menu---------------------------------------------------------

// Hiển thị trường nhập liệu khi người dùng nhấn vào nút sửa
let currentMenuId = '';
function showInputField(menuId) {
  // Hiển thị trường nhập liệu
  document.getElementById("inputContainer").style.display = "block";
  currentMenuId = menuId;
  // Khi hiển thị, trường nhập liệu sẽ có sẵn tên hiện tại của menu
  const menuItem = document.getElementById(menuId);
  document.getElementById("newMenuName").value = menuItem.textContent.trim();
}

// Cập nhật tên menu từ trường nhập liệu
function updateMenuFromInput() {
  const newName = document.getElementById("newMenuName").value;

  // Kiểm tra xem người dùng có nhập tên mới không
  if (newName.trim() === "") {
      alert("Vui lòng nhập tên mới!");
      return;
  }

  // Thay đổi tên mục menu
  updateMenuItemName(currentMenuId, newName);

  // Ẩn trường nhập liệu và xóa nội dung sau khi cập nhật
  document.getElementById("newMenuName").value = "";
  document.getElementById("inputContainer").style.display = "none";
}

// Hàm cập nhật tên mục menu
function updateMenuItemName(menuId, newName) {
  const menuItem = document.getElementById(menuId);
  if (menuItem) {
      menuItem.textContent = newName;
  }
}

// -------------------------------Add menu -----------------------------------------------------------------

let currentAddMenuId = ''; // Biến lưu trữ id của menu trước vị trí thêm mới

// Hiển thị trường nhập liệu khi người dùng nhấn nút "+"
function showAddInputField(menuId) {
    // Lưu id của menu hiện tại (vị trí thêm mới)
    currentAddMenuId = menuId;

    // Hiển thị trường nhập liệu
    document.getElementById("addInputContainer").style.display = "block";

    // Xóa nội dung nhập trước đó, nếu có
    document.getElementById("newMenuTitle").value = "";
}

// Thêm menu mới sau mục menu hiện tại
function addNewMenu() {
    const newTitle = document.getElementById("newMenuTitle").value;

    // Kiểm tra xem người dùng có nhập tên menu không
    if (newTitle.trim() === "") {
        alert("Vui lòng nhập tên menu mới!");
        return;
    }

        // Tạo id duy nhất cho menu mới
        const uniqueId = `menu-${Date.now()}`;


    // Tạo phần tử <a> mới cho menu
    const newMenu = document.createElement("a");
    newMenu.className = "w3-bar-item w3-button";
    newMenu.href = "javascript:void(0)";
    newMenu.textContent = newTitle;
    newMenu.setAttribute("onclick", `showContent('${uniqueId}')`);
    newMenu.id = uniqueId;

        // Tạo phần nội dung trống cho menu mới
        const newContent = document.createElement("div");
        newContent.id = uniqueId;
  

    // Lấy container chứa các mục menu
    const menuContainer = document.getElementById("menuContainer");

    // Thêm menu mới vào sau menu có id là `currentAddMenuId`
    const currentMenu = document.getElementById(currentAddMenuId);
    currentMenu.insertAdjacentElement("afterend", newMenu);
    newMenu.insertAdjacentElement("afterend", newAddButton);

    // Ẩn trường nhập liệu và xóa nội dung sau khi thêm
    document.getElementById("addInputContainer").style.display = "none";
    document.getElementById("newMenuTitle").value = "";
}


// --------------------------------------------View admin menu left ------------------------------------------------------------

function navigateToMenuLeft(menuId) {
  // Ẩn tất cả các admin menu left
  const allMenuLefts = document.querySelectorAll('[id^="admin-menu-left"]');
  allMenuLefts.forEach(menuLeft => {
      menuLeft.style.display = "none";  // Ẩn tất cả các menu left
  });

  // Hiển thị admin menu left tương ứng với menuId
  const adminMenuLeft = document.getElementById(`admin-menu-left-${menuId}`);
  if (adminMenuLeft) {
      adminMenuLeft.style.display = "block";  // Hiển thị menu left tương ứng
  }

  // Ẩn menu top
  document.getElementById("menu-items").style.display = "none";  // Ẩn menu top
}

function goBackToMenuTop() {
  // Ẩn tất cả các admin menu left
  const allMenuLefts = document.querySelectorAll('[id^="admin-menu-left"]');
  allMenuLefts.forEach(menuLeft => {
      menuLeft.style.display = "none";  // Ẩn tất cả các menu left
  });

  // Hiển thị menu top
  document.getElementById("menu-items").style.display = "block";  // Hiển thị menu top
}




