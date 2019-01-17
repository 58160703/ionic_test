//ประกาศให้ map กับตัว backend จะได้รับมาค้นได้
export class Course {
    constructor(
    public id,
    public c_title,
    public c_detail,
    public c_date,
    public c_view,
    public c_color,
    public c_pic
    ) {}
    }