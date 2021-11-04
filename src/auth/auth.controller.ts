import { Body, Controller, Get, Res } from "@nestjs/common";
import * as vCardJS from 'vcards-js';

@Controller('auth')
export class AuthController {
  @Get('')
  getAll(@Res() res, @Body() body){
    const vCard = vCardJS();
    vCard.firstName = body.name;
    vCard.middleName = 'Full Stack Developer';
    vCard.lastName = body.surname;
    vCard.organization = 'Motionweb Corporation';
    vCard.photo.attachFromUrl('https://avatars2.githubusercontent.com/u/5659221?v=3&s=460', 'JPEG');
    vCard.workPhone = '312-555-1212';
    vCard.birthday = new Date(1985, 0, 1);
    vCard.title = 'Full Stack Developer';
    vCard.url = 'https://github.com/lukman-wp';
    vCard.note = 'Notes on Eric';
    res.set('Content-Type', 'text/vcard; name="enesser.vcf"');
    res.set('Content-Disposition', 'inline; filename="enesser.vcf"');
    res.send(vCard.getFormattedString());
  }
}