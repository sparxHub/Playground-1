function Tags()
{
	// Properties
	this.PRIMARY = [
		{name: 'Image width', field: 'ImageWidth', id: 256, compressed: 'J'},
		{name: 'Image height', field: 'ImageLength', id: 257, compressed: 'J'},
		{name: 'Number of bits per component', field: 'BitsPerSample', id: 258, compressed: 'J'},
		{name: 'Compression scheme', field: 'Compression', id: 259, compressed: 'J'},
		{name: 'Pixel composition', field: 'PhotometricInterpretation', id: 262, compressed: 'N'},
		{name: 'Image title', field: 'ImageDescription', id: 270, compressed: 'R'},
		{name: 'Manufacturer', field: 'Make', id: 271, compressed: 'R'},
		{name: 'Model', field: 'Model', id: 272, compressed: 'R'},
		{name: 'Image data location', field: 'StripOffsets', id: 273, compressed: 'N'},
		{name: 'Orientation of image', field: 'Orientation', id: 274, compressed: 'R'},
		{name: 'Number of components', field: 'SamplesPerPixel', id: 277, compressed: 'J'},
		{name: 'Number of rows per strip', field: 'RowsPerStrip', id: 278, compressed: 'N'},
		{name: 'Bytes per compressed strip', field: 'StripByteCounts', id: 279, compressed: 'N'},
		{name: 'Width resolution', field: 'XResolution', id: 282, compressed: 'M'},
		{name: 'Height resolution', field: 'YResolution', id: 283, compressed: 'M'},
		{name: 'Image data arrangement', field: 'PlanarConfiguration', id: 284, compressed: 'J'},
		{name: 'Resolution unit', field: 'ResolutionUnit', id: 296, compressed: 'M'},
		{name: 'Transfer function', field: 'TransferFunction', id: 301, compressed: 'R'},
		{name: 'Software used', field: 'Software', id: 305, compressed: 'O'},
		{name: 'File change date and time', field: 'DateTime', id: 306, compressed: 'R'},
		{name: 'Person who created the image', field: 'Artist', id: 315, compressed: 'O'},
		{name: 'White point chromaticity', field: 'WhitePoint', id: 318, compressed: 'O'},
		{name: 'Chromaticities of primaries', field: 'PrimaryChromaticities', id: 319, compressed: 'O'},
		{name: 'Offset to JPEG SOI', field: 'JPEGInterchangeFormat', id: 513, compressed: 'N'},
		{name: 'Bytes of JPEG data', field: 'JPEGInterchangeFormatLength', id: 514, compressed: 'N'},
		{name: 'Color space transformation matrix coefficients', field: 'YCbCrCoefficients', id: 529, compressed: 'O'},
		{name: 'Subsampling ratio of Y to C', field: 'YCbCrSubSampling', id: 530, compressed: 'J'},
		{name: 'YC positioning', field: 'YCbCrPositioning', id: 531, compressed: 'M'},
		{name: 'Pair of black and white reference values', field: 'ReferenceBlackWhite', id: 532, compressed: 'O'},
		{name: 'Copyright holder', field: 'Copyright', id: 33432, compressed: 'O'},
		{name: 'Exif tag', field: 'ExifIFDPointer', id: 34665, compressed: 'M'},
		{name: 'GPS tag', field: 'GPSInfoIFDPointer', id: 34853, compressed: 'O'}	
	];
	
	this.THUMBNAIL = [
		{name: 'Image width', field: 'ImageWidth', id: 256, compressed: 'J'},
		{name: 'Image height', field: 'ImageLength', id: 257, compressed: 'J'},
		{name: 'Number of bits per component', field: 'BitsPerSample', id: 258, compressed: 'J'},
		{name: 'Compression', field: 'Compression', id: 259, compressed: 'M'},
		{name: 'Pixel composition', field: 'PhotometricInterpretation', id: 262, compressed: 'J'},
		{name: 'Image title', field: 'ImageDescription', id: 270, compressed: 'O'},
		{name: 'Manufacturer of image input equipment', field: 'Make', id: 271, compressed: 'O'},
		{name: 'Model of image input equipment', field: 'Model', id: 272, compressed: 'O'},
		{name: 'Image data location', field: 'StripOffsets', id: 273, compressed: 'N'},
		{name: 'Orientation of image', field: 'Orientation', id: 274, compressed: 'O'},
		{name: 'Number of components', field: 'SamplesPerPixel', id: 277, compressed: 'J'},
		{name: 'Number of rows per strip', field: 'RowsPerStrip', id: 278, compressed: 'N'},
		{name: 'Bytes per compressed strip', field: 'StripByteCounts', id: 279, compressed: 'N'},
		{name: 'Width resolution', field: 'XResolution', id: 282, compressed: 'M'},
		{name: 'Height resolution', field: 'YResolution', id: 283, compressed: 'M'},
		{name: 'Image data arrangement', field: 'PlanarConfiguration', id: 284, compressed: 'J'},
		{name: 'Resolution unit', field: 'ResolutionUnit', id: 296, compressed: 'M'},
		{name: 'Transfer function', field: 'TransferFunction', id: 301, compressed: 'O'},
		{name: 'Software used', field: 'Software', id: 305, compressed: 'O'},
		{name: 'File change date and time', field: 'DateTime', id: 306, compressed: 'O'},
		{name: 'Person who created the image', field: 'Artist', id: 315, compressed: 'O'},
		{name: 'White point chromaticity', field: 'WhitePoint', id: 318, compressed: 'O'},
		{name: 'Chromaticities of primaries', field: 'PrimaryChromaticities', id: 319, compressed: 'O'},
		{name: 'Offset to JPEG SOI', field: 'JPEGInterchangeFormat', id: 513, compressed: 'M'},
		{name: 'Bytes of JPEG data', field: 'JPEGInterchangeFormatLength', id: 514, compressed: 'M'},
		{name: 'Color space transformation matrix coefficients', field: 'YCbCrCoefficients', id: 529, compressed: 'O'},
		{name: 'Subsampling ratio of Y to C', field: 'YCbCrSubSampling', id: 530, compressed: 'J'},
		{name: 'Y and C positioning', field: 'YCbCrPositioning', id: 531, compressed: 'O'},
		{name: 'Pair of black and white reference values', field: 'ReferenceBlackWhite', id: 532, compressed: 'O'},
		{name: 'Copyright holder', field: 'Copyright', id: 33432, compressed: 'O'},
		{name: 'Exif tag', field: 'ExifIFDPointer', id: 34665, compressed: 'O'},
		{name: 'GPS tag', field: 'GPSInfoIFDPointer', id: 34853, compressed: 'O'}	
	];
	
	this.EXIF = [
		{name: 'Exposure time', field: 'ExposureTime', id: 33434, compressed: 'R'},
		{name: 'F number', field: 'FNumber', id: 33437, compressed: 'O'},
		{name: 'Exposure program', field: 'ExposureProgram', id: 34850, compressed: 'O'},
		{name: 'Spectral sensitivity', field: 'SpectralSensitivity', id: 34852, compressed: 'O'},
		{name: 'ISO speed', field: 'ISOSpeedRatings', id: 34855, compressed: 'O'},
		{name: 'Optoelectric coefficient', field: 'OECF', id: 34856, compressed: 'O'},
		{name: 'Exif Version', field: 'ExifVersion', id: 36864, compressed: 'M'},
		{name: 'Date generated', field: 'DateTimeOriginal', id: 36867, compressed: 'O'},
		{name: 'Date digitized', field: 'DateTimeDigitized', id: 36868, compressed: 'O'},
		{name: 'Configuration', field: 'ComponentsConfiguration', id: 37121, compressed: 'M'},
		{name: 'Image compression mode', field: 'CompressedBitsPerPixel', id: 37122, compressed: 'O'},
		{name: 'Shutter speed', field: 'ShutterSpeedValue', id: 37377, compressed: 'O'},
		{name: 'Aperture', field: 'ApertureValue', id: 37378, compressed: 'O'},
		{name: 'Brightness', field: 'BrightnessValue', id: 37379, compressed: 'O'},
		{name: 'Exposure bias', field: 'ExposureBiasValue', id: 37380, compressed: 'O'},
		{name: 'Maximum lens aperture', field: 'MaxApertureValue', id: 37381, compressed: 'O'},
		{name: 'Subject distance', field: 'SubjectDistance', id: 37382, compressed: 'O'},
		{name: 'Metering mode', field: 'MeteringMode', id: 37383, compressed: 'O'},
		{name: 'Light source', field: 'LightSource', id: 37384, compressed: 'O'},
		{name: 'Flash', field: 'Flash', id: 37385, compressed: 'R'},
		{name: 'Lens focal length', field: 'FocalLength', id: 37386, compressed: 'O'},
		{name: 'Subject area', field: 'SubjectArea', id: 37396, compressed: 'O'},
		{name: 'Manufacturer notes', field: 'MakerNote', id: 37500, compressed: 'O'},
		{name: 'User comments', field: 'UserComment', id: 37510, compressed: 'O'},
		{name: 'DateTime subseconds', field: 'SubSecTime', id: 37520, compressed: 'O'},
		{name: 'DateTimeOriginal subseconds', field: 'SubSecTimeOriginal', id: 37521, compressed: 'O'},
		{name: 'DateTimeDigitized subseconds', field: 'SubSecTimeDigitized', id: 37522, compressed: 'O'},
		{name: 'FlashPix version', field: 'FlashpixVersion', id: 40960, compressed: 'M'},
		{name: 'Color space', field: 'ColorSpace', id: 40961, compressed: 'M'},
		{name: 'Valid image width', field: 'PixelXDimension', id: 40962, compressed: 'M'},
		{name: 'Valid image height', field: 'PixelYDimension', id: 40963, compressed: 'M'},
		{name: 'Related audio file', field: 'RelatedSoundFile', id: 40964, compressed: 'O'},
		{name: 'Interoperability tag', field: 'InteroperabilityIFDPointer', id: 40965, compressed: 'O'},
		{name: 'Flash energy', field: 'FlashEnergy', id: 41483, compressed: 'O'},
		{name: 'Spatial frequency response', field: 'SpatialFrequencyResponse', id: 41484, compressed: 'O'},
		{name: 'Focal plane X resolution', field: 'FocalPlaneXResolution', id: 41486, compressed: 'O'},
		{name: 'Focal plane Y resolution', field: 'FocalPlaneYResolution', id: 41487, compressed: 'O'},
		{name: 'Focal plane resolution unit', field: 'FocalPlaneResolutionUnit', id: 41488, compressed: 'O'},
		{name: 'Subject location', field: 'SubjectLocation', id: 41492, compressed: 'O'},
		{name: 'Exposure index', field: 'ExposureIndex', id: 41493, compressed: 'O'},
		{name: 'Sensing method', field: 'SensingMethod', id: 41495, compressed: 'O'},
		{name: 'File source', field: 'FileSource', id: 41728, compressed: 'O'},
		{name: 'Scene type', field: 'SceneType', id: 41729, compressed: 'O'},
		{name: 'CFA pattern', field: 'CFAPattern', id: 41730, compressed: 'O'},
		{name: 'Custom image processing', field: 'CustomRendered', id: 41985, compressed: 'O'},
		{name: 'Exposure mode', field: 'ExposureMode', id: 41986, compressed: 'R'},
		{name: 'White balance', field: 'WhiteBalance', id: 41987, compressed: 'R'},
		{name: 'Digital zoom ratio', field: 'DigitalZoomRatio', id: 41988, compressed: 'O'},
		{name: 'Focal length in 35 mm film', field: 'FocalLengthIn35mmFilm', id: 41989, compressed: 'O'},
		{name: 'Scene capture type', field: 'SceneCaptureType', id: 41990, compressed: 'R'},
		{name: 'Gain control', field: 'GainControl', id: 41991, compressed: 'O'},
		{name: 'Contrast', field: 'Contrast', id: 41992, compressed: 'O'},
		{name: 'Saturation', field: 'Saturation', id: 41993, compressed: 'O'},
		{name: 'Sharpness', field: 'Sharpness', id: 41994, compressed: 'O'},
		{name: 'Device settings description', field: 'DeviceSettingDescription', id: 41995, compressed: 'O'},
		{name: 'Subject distance range', field: 'SubjectDistanceRange', id: 41996, compressed: 'O'},
		{name: 'Unique image ID', field: 'ImageUniqueID', id: 42016, compressed: 'O'}	
	];	
	
	this.GPS = [
		{name: 'GPS tag version', field: 'GPSVersionID', id: 0, compressed: 'O'},
		{name: 'North or South', field: 'GPSLatitudeRef', id: 1, compressed: 'O'},
		{name: 'Latitude', field: 'GPSLatitude', id: 2, compressed: 'O'},
		{name: 'East or West', field: 'GPSLongitudeRef', id: 3, compressed: 'O'},
		{name: 'Longitude', field: 'GPSLongitude', id: 4, compressed: 'O'},
		{name: 'Altitude reference', field: 'GPSAltitudeRef', id: 5, compressed: 'O'},
		{name: 'Altitude', field: 'GPSAltitude', id: 6, compressed: 'O'},
		{name: 'GPS time', field: 'GPSTimeStamp', id: 7, compressed: 'O'},
		{name: 'GPS satellites used for measurement', field: 'GPSSatellites', id: 8, compressed: 'O'},
		{name: 'GPS receiver status', field: 'GPSStatus', id: 9, compressed: 'O'},
		{name: 'GPS measurement mode', field: 'GPSMeasureMode', id: 10, compressed: 'O'},
		{name: 'Measurement precision', field: 'GPSDOP', id: 11, compressed: 'O'},
		{name: 'Speed unit', field: 'GPSSpeedRef', id: 12, compressed: 'O'},
		{name: 'Speed of GPS receiver', field: 'GPSSpeed', id: 13, compressed: 'O'},
		{name: 'Reference for direction of movement', field: 'GPSTrackRef', id: 14, compressed: 'O'},
		{name: 'Direction of movement', field: 'GPSTrack', id: 15, compressed: 'O'},
		{name: 'Reference for direction of image', field: 'GPSImgDirectionRef', id: 16, compressed: 'O'},
		{name: 'Direction of image', field: 'GPSImgDirection', id: 17, compressed: 'O'},
		{name: 'Survey data', field: 'GPSMapDatum', id: 18, compressed: 'O'},
		{name: 'Reference for latitude of destination', field: 'GPSDestLatitudeRef', id: 19, compressed: 'O'},
		{name: 'Latitude of destination', field: 'GPSDestLatitude', id: 20, compressed: 'O'},
		{name: 'Reference for longitude of destination', field: 'GPSDestLongitudeRef', id: 21, compressed: 'O'},
		{name: 'Longitude of destination', field: 'GPSDestLongitude', id: 22, compressed: 'O'},
		{name: 'Reference for bearing of destination', field: 'GPSDestBearingRef', id: 23, compressed: 'O'},
		{name: 'Bearing of destination', field: 'GPSDestBearing', id: 24, compressed: 'O'},
		{name: 'Reference for distance to destination', field: 'GPSDestDistanceRef', id: 25, compressed: 'O'},
		{name: 'Distance to destination', field: 'GPSDestDistance', id: 26, compressed: 'O'},
		{name: 'Processing method', field: 'GPSProcessingMethod', id: 27, compressed: 'O'},
		{name: 'Name of GPS area', field: 'GPSAreaInformation', id: 28, compressed: 'O'},
		{name: 'GPS date', field: 'GPSDateStamp', id: 29, compressed: 'O'},
		{name: 'GPS differential correction', field: 'GPSDifferential', id: 30, compressed: 'O'}	
	];
	
	this.INTEROP = [
		{name: 'Identification', field: 'InteroperabilityIndex', id: 1, compressed: 'O'}	
	];
}