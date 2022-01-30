import cv2

cap = cv2.VideoCapture(0)

while(True):
    haveFrame,bg = cap.read()
    haveFrame,im = cap.read()
    
    if (not haveFrame) or (cv2.waitKey(1) & 0xFF == ord('q')):
        break

    diffc = cv2.absdiff(im,bg)
    diffg = cv2.cvtColor(diffc,cv2.COLOR_BGR2GRAY)
    bwmask = cv2.inRange(diffg,50,255)

    bwmask_median = cv2.medianBlur(bwmask,5)

    contours,hierarchy = cv2.findContours(bwmask_median, cv2.RETR_TREE, cv2.CHAIN_APPROX_NONE)

    cv2.drawContours(im, contours, -1, (0, 255, 0), 1)

    cv2.imshow('bwmask', bwmask)
    cv2.imshow('bwmask_median', bwmask_median)
    cv2.imshow('im', im)


cap.release()
cv2.destroyAllWindows()
